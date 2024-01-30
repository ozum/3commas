/* eslint-disable @typescript-eslint/no-invalid-void-type, unicorn/no-array-callback-reference, @typescript-eslint/no-confusing-void-expression */
import arrify from "arrify";
import {
  Client,
  getAllAccounts,
  createAccount,
  deleteAccount,
  getAccount,
  createBot,
  deleteBot,
  getAllBots,
  getBot,
  getMarketPairs,
} from "./api/index.js";
import type {
  AccountCreateDto,
  BotCreateDto,
  AccountQueryParams,
  BotQueryParams,
  MarketCode,
  PairObject,
  Pair,
  PairArray,
} from "./api/index.js";
import { Account } from "./account.js";
import { Bot } from "./bot.js";
import { getRelaxValue } from "./api/utils/relax.js";
import { ClientOptions } from "./api/client.js";
import { toPairObject, toPairArray, toPairString } from "./api/utils/pair-functions.js";
import { parallelSettled } from "./api/utils/parallel.js";

type SelectorFunction<T extends { id: number }> = (value: T, index?: number, array?: T[]) => boolean;
type Selector<T extends { id: number }> = number | number[] | SelectorFunction<T>;

export class ThreeCommas {
  static #marketPairs = new Map<MarketCode, Set<string>>();

  #accounts = new Map<number, Account>();
  #bots = new Map<number, Bot>();
  #client?: Client;
  readonly #clientOptions: ClientOptions<true>;

  public constructor(options: Omit<ClientOptions<true>, "convertNumeric"> = {}) {
    this.#clientOptions = options;
  }

  /** Lazily loaded 3Commas Client instance. */
  public get client(): Client {
    if (this.#client === undefined) this.#client = new Client(this.#clientOptions);
    return this.#client;
  }

  /**
   * Loads accounts. Parameters are the 3Commas API query parameters and some additional parameters described below.
   *
   * @param filter is either an id, or array of ids, or a filter function to filter bots after they were loaded.
   * @param replaceAll if true, clears all accounts before loading new ones. Clears and reloads only loaded accounts otherwise.
   * @param reload if not true, does not reload accounts from API and returns already loaded accounts.
   * @returns newly loaded accounts.
   */
  public async loadAccounts(
    params: AccountQueryParams & { filter?: Selector<Account>; replaceAll?: boolean; reload?: boolean } = {},
  ): Promise<Account[]> {
    if (this.#accounts.size > 0 && !params.reload) return this.accounts;
    const { id, filterFunction } = ThreeCommas.#parseFilter(params.filter);
    const accountDtos = id ? [await getAccount(id, this.client)] : await getAllAccounts(params, this.client);
    const accounts = accountDtos.map((dto) => new Account(this, dto));
    const filteredAccounts = filterFunction ? accounts.filter(filterFunction) : accounts;

    this.#clearAccounts(params.replaceAll ? undefined : filteredAccounts.map((account) => account.id));
    filteredAccounts.forEach((account) => this.#accounts.set(account.id, account));
    return filteredAccounts;
  }

  /**
   * Creates an account and saves it to the 3Commas server and loads it.
   *
   * @param params are the parameters to create the bot.
   * @returns the created bot.
   */
  public async createAndSaveAccount(params: AccountCreateDto): Promise<Account> {
    const account = new Account(this, await createAccount(params, this.client));
    this.#accounts.set(account.id, account);
    return account;
  }

  /**
   * Deletes account from 3Commas.
   *
   * @param accountOrId is the id of the account instance to delete.
   */
  public async deleteAccount(idOrAccount: number | Account): Promise<void> {
    const id = getRelaxValue(idOrAccount, "id");
    await deleteAccount({ id }, this.client);
    this.#accounts.delete(id);
  }

  /**
   * Gets an account from loaded accounts.
   *
   * @param id is id of the account to get.
   * @returns the account.
   */
  public getAccount(id: number): Account {
    const account = this.#accounts.get(id);
    if (account === undefined) throw new Error(`Account cannot be found: ${id}`);
    return account;
  }

  /** All loaded accounts. */
  public get accounts(): Account[] {
    return [...this.#accounts.values()];
  }

  /**
   * Loads bots for currently loaded accounts. Parameters are the 3Commas API query parameters and some additional parameters described below.
   * If no accounts are loaded previously, loads all accounts first.
   *
   * @param filter is either an id, or array of ids, or a filter function to filter bots after they were loaded.
   * @returns newly loaded bots.
   */
  public async loadBots(params: Omit<BotQueryParams, "accountId"> & { filter?: Selector<Bot> } = {}): Promise<Bot[]> {
    if (this.#accounts.size === 0) await this.loadAccounts();
    const { id, filterFunction } = ThreeCommas.#parseFilter(params.filter);

    const botDtos = id ? [await getBot({ id }, this.client)] : await getAllBots(params, this.client);
    const loadedAccountBotDtos = botDtos.filter((dto) => this.#accounts.has(dto.accountId)); // Only include bots of loaded accounts.

    const bots = loadedAccountBotDtos.map((dto) => new Bot(this, dto));
    const filteredBots = filterFunction ? bots.filter(filterFunction) : bots;

    ThreeCommas.#clearItems(this.#bots);
    filteredBots.forEach((bot) => this.#bots.set(bot.id, bot));
    return filteredBots;
  }

  /** Saves all dirty and unsaved bots. */
  public async saveBots(): Promise<void> {
    await parallelSettled(this.bots.map((bot) => () => bot.save()));
  }

  /**
   * Creates a bot. If account of the created bot is not loaded, throws error. Default values may be different from
   * `createAndSaveBot` method, because `createAndSaveBot` saves the bot to the 3Commas server and gets the default
   * values from 3Commas.
   *
   * @param params are the parameters to create the bot.
   * @returns the created bot.
   * @throws Error if related account is not loaded.
   */
  public createBot(params: BotCreateDto): Bot {
    if (!this.#accounts.has(params.accountId)) throw new Error(`Cannot create bot. Related account is not loaded: ${params.accountId}`);
    const bot = new Bot(this, params);
    this.#bots.set(bot.id, bot);
    return bot;
  }

  /**
   * Creates a bot and saves it to the 3Commas server. If account of the created bot is not loaded, throws error.
   *
   * @param params are the parameters to create the bot.
   * @returns the created bot.
   * @throws Error if related account is not loaded.
   */
  public async createAndSaveBot(params: BotCreateDto): Promise<Bot> {
    if (!this.#accounts.has(params.accountId)) throw new Error(`Cannot create bot. Related account is not loaded: ${params.accountId}`);
    return this.createBot(await createBot(params, this.client));
  }

  /**
   * Deletes bot from 3Commas.
   *
   * @param botOrId is the id of the bot instance to delete.
   */
  public async deleteBot(botOrId: number | Bot): Promise<void> {
    const id = getRelaxValue(botOrId, "id");
    await deleteBot(id, this.client);
    this.#bots.delete(id);
  }

  /**
   * Deletes bots meeting the filter criteria.
   *
   * @param filter is either an id, or array of ids, or a filter function to filter bots after they were loaded.
   */
  public async deleteBots(filter: Selector<Bot>): Promise<void | void[]> {
    const { id, filterFunction } = ThreeCommas.#parseFilter(filter);
    if (id) return this.deleteBot(id);
    const { bots } = this;
    const filteredBots = (filterFunction ? bots.filter(filterFunction) : bots).filter((bot) => this.#accounts.has(bot.accountId)); // Only include bots of loaded accounts.
    return parallelSettled(filteredBots.map((bot) => () => this.deleteBot(bot)));
  }

  /**
   * Gets a bot from loaded bots.
   *
   * @param id is id of the bot to get.
   * @returns the bot.
   */
  public getBot(id: number): Bot {
    const bot = this.#bots.get(id);
    if (bot === undefined) throw new Error(`Bot cannot be found: ${id}`);
    return bot;
  }

  /** All loaded bots. */
  public get bots(): Bot[] {
    return [...this.#bots.values()];
  }

  /**  Loads market pairs for currently loaded accounts. */
  public async loadPairs(additionalMarketCodes: MarketCode[] = []): Promise<void> {
    const marketCodes = [...this.accounts.map((account) => account.marketCode), ...additionalMarketCodes];
    const filteredMarketCodes = marketCodes.filter((marketCode) => !ThreeCommas.#marketPairs.has(marketCode));
    const uniqueMarketCodes = [...new Set(filteredMarketCodes).values()];
    const pairs = await parallelSettled(uniqueMarketCodes.map((marketCode) => () => getMarketPairs({ marketCode }, this.client)));
    uniqueMarketCodes.forEach((marketCode, index) => ThreeCommas.#marketPairs.set(marketCode, new Set(pairs[index])));
  }

  /**
   * Gets pairs as strings for a loaded account. If no account is loaded for the given market code, throws error.
   *
   * @param marketCode is the market code of a loaded account.
   * @returns pairs.
   * @throws error if no pairs are loaded for the given market code.
   *
   * @example
   * const pairs = threeCommas.getPairsAsString('binance_futures'); // ['USDT_BTCUSDT', ...]
   */
  public static getPairStrings(marketCode: MarketCode): string[] {
    const pairs = ThreeCommas.#marketPairs.get(marketCode);
    if (pairs === undefined)
      throw new Error("Pairs are not loaded or no related account is available. Use 'threeCommas.loadPairs()' first.");
    return [...pairs];
  }

  /**
   * Gets pairs as objects for a loaded account. If no account is loaded for the given market code, throws error.
   *
   * @param marketCode is the market code of a loaded account.
   * @returns pairs.
   * @throws error if no pairs are loaded for the given market code.
   *
   * @example
   * const pairs = threeCommas.getPairsAsString('binance_futures'); // [{ base: "BTC", quote: "USDT" }, ...]
   */
  public static getPairObjects(marketCode: MarketCode): PairObject[] {
    const pairs = this.getPairStrings(marketCode);
    return pairs.map((pair) => toPairObject(marketCode, pair));
  }

  /**
   * Gets pairs as arrays for a loaded account. If no account is loaded for the given market code, throws error.
   *
   * @param marketCode is the market code of a loaded account.
   * @returns pairs.
   * @throws error if no pairs are loaded for the given market code.
   *
   * @example
   * const pairs = threeCommas.getPairsAsString('binance_futures'); // [["BTC", "USDT"], ["ETH", "USDT"], ...]
   */
  public static getPairArrays(marketCode: MarketCode): PairArray[] {
    const pairs = this.getPairStrings(marketCode);
    return pairs.map((pair) => toPairArray(marketCode, pair));
  }

  /**
   * Checks if given pair is available for the given market code.
   *
   * @param marketCode is the market code to check pair for.
   * @param pair is the pair to check.
   * @returns true if pair is available for the given market.
   * @throws error if no pairs are loaded for the given market code.
   */
  public static hasPair(marketCode: MarketCode, pair: Pair): boolean {
    const pairs = ThreeCommas.#marketPairs.get(marketCode);
    if (pairs === undefined)
      throw new Error("Pairs are not loaded or no related account is available. Use 'threeCommas.loadPairs()' first.");
    return pairs.has(toPairString(marketCode, pair));
  }

  public static toPairString(marketCode: MarketCode, pair: Pair): string {
    return toPairString(marketCode, pair);
  }

  public static toPairObject(marketCode: MarketCode, pair: Pair): PairObject {
    return toPairObject(marketCode, pair);
  }

  public static toPairArray(marketCode: MarketCode, pair: Pair): PairArray {
    return toPairArray(marketCode, pair);
  }

  /**
   * Examines given selector and returns an `id` or a filter function.
   *
   * @param selector is either an id, or array of ids, or a filter function.
   * @returns a single id if the selector is an id, or filter function if available.
   *
   * @example
   * this.#parseFilter(1);            // { id: 1 }
   * this.#parseFilter([1]);          // { id: 1 }
   * this.#parseFilter([1, 2]);       // { filterFunction: (item) => { new Set([1, 2]).has(item.id) } }
   * this.#parseFilter(() => {...});  // { filterFunction: () => {...} }
   */
  static #parseFilter<T extends { id: number }>(selector?: Selector<T>): { id?: number | undefined; filterFunction?: SelectorFunction<T> } {
    if (selector === undefined) return {};

    const id = Array.isArray(selector) && selector.length === 1 ? selector[0] : selector;
    if (typeof id === "number") return { id };

    const idSet = new Set(arrify(typeof selector === "function" ? [] : selector));
    const filterFunction = typeof selector === "function" ? selector : (item: T) => idSet.has(item.id);
    return { filterFunction };
  }

  /**
   * Clears (unloads) items from memory and return their ids. Does NOT delete items in 3Commas.
   *
   * @param items are the items to clear.
   * @param selector is the id or select function to select items to delete. If undefined, all items are deleted from memory.
   * @returns the ids of deleted items.
   */
  static #clearItems<T extends { id: number }>(items: Map<number, T>, selector?: Selector<T>): number[] {
    if (selector === undefined) {
      const ids = [...items.keys()];
      items.clear();
      return ids;
    }
    const idList = typeof selector === "function" ? [...items.values()].filter(selector).map((item) => item.id) : arrify(selector);
    idList.forEach((id) => items.delete(id));
    return idList;
  }

  /**
   * Clears (unloads) accounts from memory and return their ids. Does NOT delete accounts in 3Commas.
   *
   * @param selector is the id or select function to select items to delete. If undefined, all accounts are deleted from memory.
   */
  #clearAccounts(selector?: Selector<Account>): void {
    const accountIds = new Set(ThreeCommas.#clearItems(this.#accounts, selector));

    // Clear related bots
    if (selector === undefined) this.#bots.clear();
    else ThreeCommas.#clearItems(this.#bots, (bot) => accountIds.has(bot.accountId));
  }
}

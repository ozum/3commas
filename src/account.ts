import { updateAccount } from "./api/index.js";
import type { Client, AccountDto, PairObject, Pair, PairArray } from "./api/index.js";
import { Bot } from "./bot.js";
import { ThreeCommas } from "./three-commas.js";
import { DirtyChecker } from "./dirty-checker.js";
import { toPairString, toPairObject, toPairArray } from "./api/utils/pair-functions.js";

export class Account {
  readonly #root: ThreeCommas;
  #data: AccountDto;
  #dirtyChecker: DirtyChecker<AccountDto>;

  constructor(root: ThreeCommas, data: AccountDto) {
    this.#data = data;
    this.#dirtyChecker = new DirtyChecker(this.#data);
    this.#root = root;
  }

  #replaceData(data: AccountDto): this {
    if (data.id !== this.id && this.id > 0) throw new Error(`ID cannot be changed: ${data.id} !== ${this.id}`);
    this.#data = data;
    this.#dirtyChecker = new DirtyChecker(this.#data, ["id"]);
    return this;
  }

  public async save(params: { secret?: string; passphrase?: string } = {}): Promise<this> {
    if (this.#dirtyChecker.isDirty)
      this.#replaceData(await updateAccount({ ...this.#data, ...params, accountId: this.#data.id }, this.#client));
    return this;
  }

  public async delete(): Promise<void> {
    return this.#root.deleteAccount(this.id);
  }

  get #client(): Client {
    return this.#root.client;
  }

  public get bots(): Bot[] {
    return this.#root.bots.filter((bot) => bot.accountId === this.id);
  }

  public get canShort(): boolean {
    return this.#data.supportedMarketTypes.includes("futures");
  }

  public toPairString(pair: Pair): string {
    return toPairString(this.marketCode, pair);
  }

  public toPairObject(pair: Pair): PairObject {
    return toPairObject(this.marketCode, pair);
  }

  public toPairArray(pair: Pair): PairArray {
    return toPairArray(this.marketCode, pair);
  }

  /** All available pairs for the account as strings. i.e. `['USDT_BTCUSDT', ...]` */
  public get getStringPairs(): string[] {
    return ThreeCommas.getPairStrings(this.marketCode);
  }

  /** All available pairs for the account as objects. i.e. `[{ base: "BTC", quote: "USDT" }, ...]` */
  public get getPairs(): PairObject[] {
    return ThreeCommas.getPairObjects(this.marketCode);
  }

  /**
   * Checks if given pair is available for this market..
   *
   * @param pair is the pair to check.
   * @returns true if pair is available for the given market.
   * @throws error if no pairs are loaded for the given market code.
   */
  public hasPair(pair: Pair): boolean {
    return ThreeCommas.hasPair(this.marketCode, pair);
  }

  public set secret(secret: AccountDto["secret"]) {
    this.#dirtyChecker.set("secret", secret);
  }

  public set passphrase(passphrase: AccountDto["passphrase"]) {
    this.#dirtyChecker.set("passphrase", passphrase);
  }

  public get id(): AccountDto["id"] {
    return this.#data.id;
  }

  public get address(): AccountDto["address"] {
    return this.#data.address;
  }

  public set address(address: AccountDto["address"]) {
    this.#dirtyChecker.set("address", address);
  }

  public get autoBalancePeriod(): AccountDto["autoBalancePeriod"] {
    return this.#data.autoBalancePeriod;
  }

  public get autoBalancePortfolioId(): AccountDto["autoBalancePortfolioId"] {
    return this.#data.autoBalancePortfolioId;
  }

  public get autoBalanceCurrencyChangeLimit(): AccountDto["autoBalanceCurrencyChangeLimit"] {
    return this.#data.autoBalanceCurrencyChangeLimit;
  }

  public get autobalanceEnabled(): AccountDto["autobalanceEnabled"] {
    return this.#data.autobalanceEnabled;
  }

  public get hedgeModeAvailable(): AccountDto["hedgeModeAvailable"] {
    return this.#data.hedgeModeAvailable;
  }

  public get hedgeModeEnabled(): AccountDto["hedgeModeEnabled"] {
    return this.#data.hedgeModeEnabled;
  }

  public get isLocked(): AccountDto["isLocked"] {
    return this.#data.isLocked;
  }

  public get smartTradingSupported(): AccountDto["smartTradingSupported"] {
    return this.#data.smartTradingSupported;
  }

  public get availableForTrading(): AccountDto["availableForTrading"] {
    return this.#data.availableForTrading;
  }

  public get statsSupported(): AccountDto["statsSupported"] {
    return this.#data.statsSupported;
  }

  public get tradingSupported(): AccountDto["tradingSupported"] {
    return this.#data.tradingSupported;
  }

  public get marketBuySupported(): AccountDto["marketBuySupported"] {
    return this.#data.marketBuySupported;
  }

  public get marketSellSupported(): AccountDto["marketSellSupported"] {
    return this.#data.marketSellSupported;
  }

  public get conditionalBuySupported(): AccountDto["conditionalBuySupported"] {
    return this.#data.conditionalBuySupported;
  }

  public get botsAllowed(): AccountDto["botsAllowed"] {
    return this.#data.botsAllowed;
  }

  public get botsTtpAllowed(): AccountDto["botsTtpAllowed"] {
    return this.#data.botsTtpAllowed;
  }

  public get botsTslAllowed(): AccountDto["botsTslAllowed"] {
    return this.#data.botsTslAllowed;
  }

  public get gordonBotsAvailable(): AccountDto["gordonBotsAvailable"] {
    return this.#data.gordonBotsAvailable;
  }

  public get multiBotsAllowed(): AccountDto["multiBotsAllowed"] {
    return this.#data.multiBotsAllowed;
  }

  public get createdAt(): AccountDto["createdAt"] {
    return this.#data.createdAt;
  }

  public get updatedAt(): AccountDto["updatedAt"] {
    return this.#data.updatedAt;
  }

  public get lastAutoBalance(): AccountDto["lastAutoBalance"] {
    return this.#data.lastAutoBalance;
  }

  public get fastConvertAvailable(): AccountDto["fastConvertAvailable"] {
    return this.#data.fastConvertAvailable;
  }

  public get gridBotsAllowed(): AccountDto["gridBotsAllowed"] {
    return this.#data.gridBotsAllowed;
  }

  public get apiKeyInvalid(): AccountDto["apiKeyInvalid"] {
    return this.#data.apiKeyInvalid;
  }

  public get marketIcon(): AccountDto["marketIcon"] {
    return this.#data.marketIcon;
  }

  public get depositEnabled(): AccountDto["depositEnabled"] {
    return this.#data.depositEnabled;
  }

  public get includeInSummary(): AccountDto["includeInSummary"] {
    return this.#data.includeInSummary;
  }

  public set includeInSummary(includeInSummary: AccountDto["includeInSummary"]) {
    this.#dirtyChecker.set("includeInSummary", includeInSummary);
  }

  public get supportedMarketTypes(): AccountDto["supportedMarketTypes"] {
    return this.#data.supportedMarketTypes;
  }

  public get primaryDisplayCurrencyProfitPercentage(): AccountDto["primaryDisplayCurrencyProfitPercentage"] {
    return this.#data.primaryDisplayCurrencyProfitPercentage;
  }

  public get primaryDisplayCurrencyProfit(): AccountDto["primaryDisplayCurrencyProfit"] {
    return this.#data.primaryDisplayCurrencyProfit;
  }

  public get dayProfitPrimaryDisplayCurrencyPercentage(): AccountDto["dayProfitPrimaryDisplayCurrencyPercentage"] {
    return this.#data.dayProfitPrimaryDisplayCurrencyPercentage;
  }

  public get dayProfitPrimaryDisplayCurrency(): AccountDto["dayProfitPrimaryDisplayCurrency"] {
    return this.#data.dayProfitPrimaryDisplayCurrency;
  }

  public get primaryDisplayCurrencyAmount(): AccountDto["primaryDisplayCurrencyAmount"] {
    return this.#data.primaryDisplayCurrencyAmount;
  }

  public get totalPrimaryDisplayCurrencyProfit(): AccountDto["totalPrimaryDisplayCurrencyProfit"] {
    return this.#data.totalPrimaryDisplayCurrencyProfit;
  }

  public get availableIncludeInSummary(): AccountDto["availableIncludeInSummary"] {
    return this.#data.availableIncludeInSummary;
  }

  public get apiKey(): AccountDto["apiKey"] {
    return this.#data.apiKey;
  }

  public set apiKey(apiKey: AccountDto["apiKey"]) {
    this.#dirtyChecker.set("apiKey", apiKey);
  }

  public get name(): AccountDto["name"] {
    return this.#data.name;
  }

  public set name(name: AccountDto["name"]) {
    this.#dirtyChecker.set("name", name);
  }

  public get autoBalanceMethod(): AccountDto["autoBalanceMethod"] {
    return this.#data.autoBalanceMethod;
  }

  public get autoBalanceError(): AccountDto["autoBalanceError"] {
    return this.#data.autoBalanceError;
  }

  public get customerId(): AccountDto["customerId"] {
    return this.#data.customerId;
  }

  public set customerId(customerId: AccountDto["customerId"]) {
    this.#dirtyChecker.set("customerId", customerId);
  }

  public get subaccountName(): AccountDto["subaccountName"] {
    return this.#data.subaccountName;
  }

  public set subaccountName(subaccountName: AccountDto["subaccountName"]) {
    this.#dirtyChecker.set("subaccountName", subaccountName);
  }

  public get lockReason(): AccountDto["lockReason"] {
    return this.#data.lockReason;
  }

  public get btcAmount(): AccountDto["btcAmount"] {
    return this.#data.btcAmount;
  }

  public get usdAmount(): AccountDto["usdAmount"] {
    return this.#data.usdAmount;
  }

  public get dayProfitBtc(): AccountDto["dayProfitBtc"] {
    return this.#data.dayProfitBtc;
  }

  public get dayProfitUsd(): AccountDto["dayProfitUsd"] {
    return this.#data.dayProfitUsd;
  }

  public get dayProfitBtcPercentage(): AccountDto["dayProfitBtcPercentage"] {
    return this.#data.dayProfitBtcPercentage;
  }

  public get dayProfitUsdPercentage(): AccountDto["dayProfitUsdPercentage"] {
    return this.#data.dayProfitUsdPercentage;
  }

  public get btcProfit(): AccountDto["btcProfit"] {
    return this.#data.btcProfit;
  }

  public get usdProfit(): AccountDto["usdProfit"] {
    return this.#data.usdProfit;
  }

  public get usdProfitPercentage(): AccountDto["usdProfitPercentage"] {
    return this.#data.usdProfitPercentage;
  }

  public get btcProfitPercentage(): AccountDto["btcProfitPercentage"] {
    return this.#data.btcProfitPercentage;
  }

  public get totalBtcProfit(): AccountDto["totalBtcProfit"] {
    return this.#data.totalBtcProfit;
  }

  public get totalUsdProfit(): AccountDto["totalUsdProfit"] {
    return this.#data.totalUsdProfit;
  }

  public get prettyDisplayType(): AccountDto["prettyDisplayType"] {
    return this.#data.prettyDisplayType;
  }

  public get exchangeName(): AccountDto["exchangeName"] {
    return this.#data.exchangeName;
  }

  public get marketCode(): AccountDto["marketCode"] {
    return this.#data.marketCode;
  }

  public set marketCode(marketCode: AccountDto["marketCode"]) {
    this.#dirtyChecker.set("marketCode", marketCode);
  }
}

import arrify from "arrify";
import { createBot, startBot, stopBot, updateBot } from "./api/index.js";
import type { Client, BotDto, VolumeType, OrderVolumeOptions, BotCreateDto } from "./api/index.js";
import { Account } from "./account.js";
import { DirtyChecker } from "./dirty-checker.js";
import type { ThreeCommas } from "./three-commas.js";
import { round } from "./api/utils/index.js";
import { getBotParameters } from "./defaults/index.js";

export class Bot {
  readonly #root: ThreeCommas;
  #data: BotDto;
  #dirtyChecker: DirtyChecker<BotDto>;

  public constructor(root: ThreeCommas, data: BotCreateDto) {
    this.#data = getBotParameters({ accountName: root.getAccount(data.accountId).name, ...data });
    this.#dirtyChecker = new DirtyChecker(this.#data, ["id", "accountId"]);
    this.#root = root;
  }

  get #client(): Client {
    return this.#root.client;
  }

  /**
   * Calculates base order volume and safety order volume for the given total percentage.
   * 3Commas API accepts base volume and safety volume as a percentage of total capital.
   * There is no way to set total volume.
   * (For 100 USDT, and %50 base and %50 safety, 50 USDT is base and 50 USDT is safety.)
   * This method accepts total volume and distributes it between base order and safety order.
   * (For 100 USDT, and %50 base and %50 safety, 25 USDT is base and 25 USDT is safety.
   * We want to spend total of 50% USDT and give 50% of 50% to the safety.)
   *
   * @param totalPercent is the total percentage we want to allocate.
   * @param safetyPercent is what percentage of the allocated volume should be spent on safety.
   * @param safetyCount is the number of safety orders.
   * @param safetyVolumeScale is the multiplier between each safety order. (i.e. `2` results in 10 -> 20 -> 40 in safety orders.)
   * @param capital is the total capital we want to spend. If capital is given results are as `quote_currency`.
   * @returns volumes to be sent to 3Commas API.
   *
   * @example
   * Bot.calculateOrderVolumes(10, { safetyPercent: 50, safetyCount: 2, safetyVolumeScale: 1.3 });
   */
  static calculateOrderVolumes({ totalPercent, safetyPercent, safetyCount, safetyVolumeScale, capital }: OrderVolumeOptions): {
    baseOrderVolume: number;
    safetyOrderVolume: number;
    baseOrderVolumeType: VolumeType;
    safetyOrderVolumeType: VolumeType;
  } {
    const type = capital ? "quote_currency" : "percent";
    const [totalRatio, safetyRatio] = [totalPercent / 100, safetyCount === 0 ? 0 : safetyPercent / 100];
    const safetyVolumeTotal = safetyVolumeScale === 1 ? safetyCount : (safetyVolumeScale ** safetyCount - 1) / (safetyVolumeScale - 1);
    const firstSafetyOrderVolume = 1 / safetyVolumeTotal;
    const baseOrderPercent = totalRatio * (1 - safetyRatio);
    const safetyOrderPercent = totalRatio * safetyRatio * (Number.isNaN(firstSafetyOrderVolume) ? 0 : firstSafetyOrderVolume);
    const baseOrderVolume = round(baseOrderPercent * (capital ?? 100), 2);
    const safetyOrderVolume = safetyCount === 0 ? 99 : round(safetyOrderPercent * (capital ?? 100), 2);
    return { baseOrderVolume, safetyOrderVolume, baseOrderVolumeType: type, safetyOrderVolumeType: type };
  }

  /**
   * Sets base order volume and safety order volume for the given total percentage.
   * 3Commas API accepts base volume and safety volume as a percentage of total capital.
   * There is no way to set total volume.
   * (For 100 USDT, and %50 base and %50 safety, 50 USDT is base and 50 USDT is safety.)
   * This method accepts total volume and distributes it between base order and safety order.
   * (For 100 USDT, and %50 base and %50 safety, 25 USDT is base and 25 USDT is safety.
   * We want to spend total of 50% USDT and give 50% of 50% to the safety.)
   *
   * @param totalPercent is the total percentage we want to allocate.
   * @param safetyPercent is what percentage of the allocated volume should be spent on safety.
   * @param safetyCount is the number of safety orders.
   * @param safetyVolumeScale is the multiplier between each safety order. (i.e. `2` results in 10 -> 20 -> 40 in safety orders.)
   * @param capital is the total capital we want to spend. If capital is given results are as `quote_currency`.
   */
  public setOrderVolumes(options: OrderVolumeOptions) {
    const result = Bot.calculateOrderVolumes(options);

    this.baseOrderVolume = result.baseOrderVolume;
    this.safetyOrderVolume = result.safetyOrderVolume === 0 ? 99 : result.safetyOrderVolume;
    this.baseOrderVolumeType = result.baseOrderVolumeType;
    this.safetyOrderVolumeType = result.safetyOrderVolumeType;
  }

  #replaceData(data: BotDto): this {
    if (data.id !== this.id && this.id > 0) throw new Error(`ID cannot be changed: ${data.id} !== ${this.id}`);
    if (data.accountId !== this.accountId) throw new Error(`Account ID cannot be changed: ${data.accountId} !== ${this.accountId}`);
    this.#data = data;
    this.#dirtyChecker = new DirtyChecker(this.#data);
    return this;
  }

  public update(data: Partial<BotDto>): this {
    (Object.entries(data) as [keyof this, this[keyof this]][]).forEach(([key, value]) => {
      try {
        this[key] = value;
      } catch (error) {
        if (error instanceof Error && !error.message.startsWith("Cannot set property")) throw error;
      }
    });
    return this;
  }

  public async start(): Promise<Bot> {
    return this.#replaceData(await startBot(this.id, this.#client));
  }

  public async stop(): Promise<Bot> {
    return this.#replaceData(await stopBot(this.id, this.#client));
  }

  public async delete(): Promise<void> {
    return this.#root.deleteBot(this.id);
  }

  public async save(data?: Partial<BotDto>): Promise<this> {
    if (data) this.update(data);
    const save = this.id < 0 ? createBot : updateBot;
    if (this.#dirtyChecker.isDirty || this.id < 0) this.#replaceData(await save({ ...this.#data, ...data }, this.#client));
    return this;
  }

  public get account(): Account {
    return this.#root.getAccount(this.accountId);
  }

  public get id(): BotDto["id"] {
    return this.#data.id;
  }

  public get tempId(): BotDto["tempId"] {
    return this.#data.tempId;
  }

  public set tempId(tempId: number) {
    if (tempId >= 0) throw new Error("Temporary ID cannot be positive.");
    this.#data.tempId = tempId; // This is not dirty checked.
  }

  public get accountId(): BotDto["accountId"] {
    return this.#data.accountId;
  }

  public get isEnabled(): BotDto["isEnabled"] {
    return this.#data.isEnabled;
  }

  public set isEnabled(isEnabled: BotDto["isEnabled"]) {
    this.#dirtyChecker.set("isEnabled", isEnabled);
  }

  public get maxSafetyOrders(): BotDto["maxSafetyOrders"] {
    return this.#data.maxSafetyOrders;
  }

  public set maxSafetyOrders(maxSafetyOrders: BotDto["maxSafetyOrders"]) {
    this.#dirtyChecker.set("maxSafetyOrders", maxSafetyOrders);
  }

  public get activeSafetyOrdersCount(): BotDto["activeSafetyOrdersCount"] {
    return this.#data.activeSafetyOrdersCount;
  }

  public set activeSafetyOrdersCount(activeSafetyOrdersCount: BotDto["activeSafetyOrdersCount"]) {
    this.#dirtyChecker.set("activeSafetyOrdersCount", activeSafetyOrdersCount);
  }

  public get pairs(): BotDto["pairs"] {
    return this.#data.pairs;
  }

  public set pairs(pairs: BotDto["pairs"]) {
    this.#dirtyChecker.set("pairs", arrify(pairs));
  }

  /**
   * Some strategies may not have `options` key or have empty `options` key. They are equal, but dirty checker cannot
   * understand this. To overcome this, we set `options` key to the existing key in the data if they are equal to prevent
   * dirty checker from marking the data unnecessarily dirty.
   */
  static #getEquivalentStrategyList(strategyList: BotDto["strategyList"], oldStrategyList: Bot["strategyList"]): BotDto["strategyList"] {
    return strategyList.map((strategy, i) => {
      const noOptionsNew = ("options" in strategy && Object.keys(strategy.options).length === 0) || !("options" in strategy);
      const old = oldStrategyList[i];
      const noOptionsOld = old !== undefined && (("options" in old && Object.keys(old.options).length === 0) || !("options" in old));
      const newOptions = noOptionsNew && noOptionsOld ? old.options : strategy.options;
      const { options: stubOptions, ...others } = strategy;
      return newOptions === undefined ? others : { ...others, options: newOptions };
    }) as BotDto["strategyList"];
  }

  public get strategyList(): BotDto["strategyList"] {
    return this.#data.strategyList;
  }

  public set strategyList(strategyList: BotDto["strategyList"]) {
    this.#dirtyChecker.set("strategyList", Bot.#getEquivalentStrategyList(strategyList, this.strategyList));
  }

  public get closeStrategyList(): BotDto["closeStrategyList"] {
    return this.#data.closeStrategyList;
  }

  public set closeStrategyList(closeStrategyList: BotDto["closeStrategyList"]) {
    this.#dirtyChecker.set("strategyList", Bot.#getEquivalentStrategyList(closeStrategyList, this.closeStrategyList));
  }

  public get maxActiveDeals(): BotDto["maxActiveDeals"] {
    return this.#data.maxActiveDeals;
  }

  public set maxActiveDeals(maxActiveDeals: BotDto["maxActiveDeals"]) {
    this.#dirtyChecker.set("maxActiveDeals", maxActiveDeals);
  }

  public get activeDealsCount(): BotDto["activeDealsCount"] {
    return this.#data.activeDealsCount;
  }

  public set activeDealsCount(activeDealsCount: BotDto["activeDealsCount"]) {
    this.#dirtyChecker.set("activeDealsCount", activeDealsCount);
  }

  public get deletable(): BotDto["deletable"] {
    return this.#data.deletable;
  }

  public get createdAt(): BotDto["createdAt"] {
    return this.#data.createdAt;
  }

  public get updatedAt(): BotDto["updatedAt"] {
    return this.#data.updatedAt;
  }

  public get trailingEnabled(): BotDto["trailingEnabled"] {
    return this.#data.trailingEnabled;
  }

  public set trailingEnabled(trailingEnabled: BotDto["trailingEnabled"]) {
    this.#dirtyChecker.set("trailingEnabled", trailingEnabled);
  }

  public get tslEnabled(): BotDto["tslEnabled"] {
    return this.#data.tslEnabled;
  }

  public set tslEnabled(tslEnabled: BotDto["tslEnabled"]) {
    this.#dirtyChecker.set("tslEnabled", tslEnabled);
  }

  public get dealStartDelaySeconds(): BotDto["dealStartDelaySeconds"] {
    return this.#data.dealStartDelaySeconds;
  }

  public set dealStartDelaySeconds(dealStartDelaySeconds: BotDto["dealStartDelaySeconds"]) {
    this.#dirtyChecker.set("dealStartDelaySeconds", dealStartDelaySeconds);
  }

  public get stopLossTimeoutEnabled(): BotDto["stopLossTimeoutEnabled"] {
    return this.#data.stopLossTimeoutEnabled;
  }

  public set stopLossTimeoutEnabled(stopLossTimeoutEnabled: BotDto["stopLossTimeoutEnabled"]) {
    this.#dirtyChecker.set("stopLossTimeoutEnabled", stopLossTimeoutEnabled);
  }

  public get stopLossTimeoutInSeconds(): BotDto["stopLossTimeoutInSeconds"] {
    return this.#data.stopLossTimeoutInSeconds;
  }

  public set stopLossTimeoutInSeconds(stopLossTimeoutInSeconds: BotDto["stopLossTimeoutInSeconds"]) {
    this.#dirtyChecker.set("stopLossTimeoutInSeconds", stopLossTimeoutInSeconds);
  }

  public get disableAfterDealsCount(): BotDto["disableAfterDealsCount"] {
    return this.#data.disableAfterDealsCount;
  }

  public set disableAfterDealsCount(disableAfterDealsCount: BotDto["disableAfterDealsCount"]) {
    this.#dirtyChecker.set("disableAfterDealsCount", disableAfterDealsCount);
  }

  public get dealsCounter(): BotDto["dealsCounter"] {
    return this.#data.dealsCounter;
  }

  public set dealsCounter(dealsCounter: BotDto["dealsCounter"]) {
    this.#dirtyChecker.set("dealsCounter", dealsCounter);
  }

  public get allowedDealsOnSamePair(): BotDto["allowedDealsOnSamePair"] {
    return this.#data.allowedDealsOnSamePair;
  }

  public set allowedDealsOnSamePair(allowedDealsOnSamePair: BotDto["allowedDealsOnSamePair"]) {
    this.#dirtyChecker.set("allowedDealsOnSamePair", allowedDealsOnSamePair);
  }

  public get easyFormSupported(): BotDto["easyFormSupported"] {
    return this.#data.easyFormSupported;
  }

  public set easyFormSupported(easyFormSupported: BotDto["easyFormSupported"]) {
    this.#dirtyChecker.set("easyFormSupported", easyFormSupported);
  }

  public get closeDealsTimeout(): BotDto["closeDealsTimeout"] {
    return this.#data.closeDealsTimeout;
  }

  public set closeDealsTimeout(closeDealsTimeout: BotDto["closeDealsTimeout"]) {
    this.#dirtyChecker.set("closeDealsTimeout", closeDealsTimeout);
  }

  public get urlSecret(): BotDto["urlSecret"] {
    return this.#data.urlSecret;
  }

  public set urlSecret(urlSecret: BotDto["urlSecret"]) {
    this.#dirtyChecker.set("urlSecret", urlSecret);
  }

  public get name(): BotDto["name"] {
    return this.#data.name;
  }

  public set name(name: BotDto["name"]) {
    this.#dirtyChecker.set("name", name);
  }

  public get takeProfit(): BotDto["takeProfit"] {
    return this.#data.takeProfit;
  }

  public set takeProfit(takeProfit: BotDto["takeProfit"]) {
    this.#dirtyChecker.set("takeProfit", takeProfit);
  }

  public get minProfitPercentage(): BotDto["minProfitPercentage"] {
    return this.#data.minProfitPercentage;
  }

  public set minProfitPercentage(minProfitPercentage: BotDto["minProfitPercentage"]) {
    this.#dirtyChecker.set("minProfitPercentage", minProfitPercentage);
  }

  public get baseOrderVolume(): BotDto["baseOrderVolume"] {
    return this.#data.baseOrderVolume;
  }

  public set baseOrderVolume(baseOrderVolume: BotDto["baseOrderVolume"]) {
    this.#dirtyChecker.set("baseOrderVolume", baseOrderVolume);
  }

  public get safetyOrderVolume(): BotDto["safetyOrderVolume"] {
    return this.#data.safetyOrderVolume;
  }

  public set safetyOrderVolume(safetyOrderVolume: BotDto["safetyOrderVolume"]) {
    this.#dirtyChecker.set("safetyOrderVolume", safetyOrderVolume);
  }

  public get safetyOrderStepPercentage(): BotDto["safetyOrderStepPercentage"] {
    return this.#data.safetyOrderStepPercentage;
  }

  public set safetyOrderStepPercentage(safetyOrderStepPercentage: BotDto["safetyOrderStepPercentage"]) {
    this.#dirtyChecker.set("safetyOrderStepPercentage", safetyOrderStepPercentage);
  }

  public get takeProfitType(): BotDto["takeProfitType"] {
    return this.#data.takeProfitType;
  }

  public set takeProfitType(takeProfitType: BotDto["takeProfitType"]) {
    this.#dirtyChecker.set("takeProfitType", takeProfitType);
  }

  public get minProfitType(): BotDto["minProfitType"] {
    return this.#data.minProfitType;
  }

  public set minProfitType(minProfitType: BotDto["minProfitType"]) {
    this.#dirtyChecker.set("minProfitType", minProfitType);
  }

  public get type(): BotDto["type"] {
    return this.#data.type;
  }

  public set type(type: BotDto["type"]) {
    this.#dirtyChecker.set("type", type);
  }

  public get martingaleVolumeCoefficient(): BotDto["martingaleVolumeCoefficient"] {
    return this.#data.martingaleVolumeCoefficient;
  }

  public set martingaleVolumeCoefficient(martingaleVolumeCoefficient: BotDto["martingaleVolumeCoefficient"]) {
    this.#dirtyChecker.set("martingaleVolumeCoefficient", martingaleVolumeCoefficient);
  }

  public get martingaleStepCoefficient(): BotDto["martingaleStepCoefficient"] {
    return this.#data.martingaleStepCoefficient;
  }

  public set martingaleStepCoefficient(martingaleStepCoefficient: BotDto["martingaleStepCoefficient"]) {
    this.#dirtyChecker.set("martingaleStepCoefficient", martingaleStepCoefficient);
  }

  public get stopLossPercentage(): BotDto["stopLossPercentage"] {
    return this.#data.stopLossPercentage;
  }

  public set stopLossPercentage(stopLossPercentage: BotDto["stopLossPercentage"]) {
    this.#dirtyChecker.set("stopLossPercentage", stopLossPercentage);
  }

  public get cooldown(): BotDto["cooldown"] {
    return this.#data.cooldown;
  }

  public set cooldown(cooldown: BotDto["cooldown"]) {
    this.#dirtyChecker.set("cooldown", cooldown);
  }

  public get btcPriceLimit(): BotDto["btcPriceLimit"] {
    return this.#data.btcPriceLimit;
  }

  public set btcPriceLimit(btcPriceLimit: BotDto["btcPriceLimit"]) {
    this.#dirtyChecker.set("btcPriceLimit", btcPriceLimit);
  }

  public get strategy(): BotDto["strategy"] {
    return this.#data.strategy;
  }

  public set strategy(strategy: BotDto["strategy"]) {
    this.#dirtyChecker.set("strategy", strategy);
  }

  public get minVolumeBtc24H(): BotDto["minVolumeBtc24h"] {
    return this.#data.minVolumeBtc24h;
  }

  public set minVolumeBtc24H(minVolumeBtc24h: BotDto["minVolumeBtc24h"]) {
    this.#dirtyChecker.set("minVolumeBtc24h", minVolumeBtc24h);
  }

  public get profitCurrency(): BotDto["profitCurrency"] {
    return this.#data.profitCurrency;
  }

  public set profitCurrency(profitCurrency: BotDto["profitCurrency"]) {
    this.#dirtyChecker.set("profitCurrency", profitCurrency);
  }

  public get minPrice(): BotDto["minPrice"] {
    return this.#data.minPrice;
  }

  public set minPrice(minPrice: BotDto["minPrice"]) {
    this.#dirtyChecker.set("minPrice", minPrice);
  }

  public get maxPrice(): BotDto["maxPrice"] {
    return this.#data.maxPrice;
  }

  public set maxPrice(maxPrice: BotDto["maxPrice"]) {
    this.#dirtyChecker.set("maxPrice", maxPrice);
  }

  public get stopLossType(): BotDto["stopLossType"] {
    return this.#data.stopLossType;
  }

  public set stopLossType(stopLossType: BotDto["stopLossType"]) {
    this.#dirtyChecker.set("stopLossType", stopLossType);
  }

  public get safetyOrderVolumeType(): BotDto["safetyOrderVolumeType"] {
    return this.#data.safetyOrderVolumeType;
  }

  public set safetyOrderVolumeType(safetyOrderVolumeType: BotDto["safetyOrderVolumeType"]) {
    this.#dirtyChecker.set("safetyOrderVolumeType", safetyOrderVolumeType);
  }

  public get baseOrderVolumeType(): BotDto["baseOrderVolumeType"] {
    return this.#data.baseOrderVolumeType;
  }

  public set baseOrderVolumeType(baseOrderVolumeType: BotDto["baseOrderVolumeType"]) {
    this.#dirtyChecker.set("baseOrderVolumeType", baseOrderVolumeType);
  }

  public get accountName(): BotDto["accountName"] {
    return this.#data.accountName;
  }

  public set accountName(accountName: BotDto["accountName"]) {
    this.#dirtyChecker.set("accountName", accountName);
  }

  public get trailingDeviation(): BotDto["trailingDeviation"] {
    return this.#data.trailingDeviation;
  }

  public set trailingDeviation(trailingDeviation: BotDto["trailingDeviation"]) {
    this.#dirtyChecker.set("trailingDeviation", trailingDeviation);
  }

  public get finishedDealsProfitUsd(): BotDto["finishedDealsProfitUsd"] {
    return this.#data.finishedDealsProfitUsd;
  }

  public set finishedDealsProfitUsd(finishedDealsProfitUsd: BotDto["finishedDealsProfitUsd"]) {
    this.#dirtyChecker.set("finishedDealsProfitUsd", finishedDealsProfitUsd);
  }

  public get finishedDealsCount(): BotDto["finishedDealsCount"] {
    return this.#data.finishedDealsCount;
  }

  public set finishedDealsCount(finishedDealsCount: BotDto["finishedDealsCount"]) {
    this.#dirtyChecker.set("finishedDealsCount", finishedDealsCount);
  }

  public get leverageType(): BotDto["leverageType"] {
    return this.#data.leverageType;
  }

  public set leverageType(leverageType: BotDto["leverageType"]) {
    this.#dirtyChecker.set("leverageType", leverageType);
  }

  public get leverageCustomValue(): BotDto["leverageCustomValue"] {
    return this.#data.leverageCustomValue;
  }

  public set leverageCustomValue(leverageCustomValue: BotDto["leverageCustomValue"]) {
    this.#dirtyChecker.set("leverageCustomValue", leverageCustomValue);
  }

  public get startOrderType(): BotDto["startOrderType"] {
    return this.#data.startOrderType;
  }

  public set startOrderType(startOrderType: BotDto["startOrderType"]) {
    this.#dirtyChecker.set("startOrderType", startOrderType);
  }

  public get activeDealsUsdProfit(): BotDto["activeDealsUsdProfit"] {
    return this.#data.activeDealsUsdProfit;
  }

  public set activeDealsUsdProfit(activeDealsUsdProfit: BotDto["activeDealsUsdProfit"]) {
    this.#dirtyChecker.set("activeDealsUsdProfit", activeDealsUsdProfit);
  }

  public get reinvestingPercentage(): BotDto["reinvestingPercentage"] {
    return this.#data.reinvestingPercentage;
  }

  public set reinvestingPercentage(reinvestingPercentage: BotDto["reinvestingPercentage"]) {
    this.#dirtyChecker.set("reinvestingPercentage", reinvestingPercentage);
  }

  public get riskReductionPercentage(): BotDto["riskReductionPercentage"] {
    return this.#data.riskReductionPercentage;
  }

  public set riskReductionPercentage(riskReductionPercentage: BotDto["riskReductionPercentage"]) {
    this.#dirtyChecker.set("riskReductionPercentage", riskReductionPercentage);
  }

  public get reinvestedVolumeUsd(): BotDto["reinvestedVolumeUsd"] {
    return this.#data.reinvestedVolumeUsd;
  }

  public set reinvestedVolumeUsd(reinvestedVolumeUsd: BotDto["reinvestedVolumeUsd"]) {
    this.#dirtyChecker.set("reinvestedVolumeUsd", reinvestedVolumeUsd);
  }

  public get minPricePercentage(): BotDto["minPricePercentage"] {
    return this.#data.minPricePercentage;
  }

  public set minPricePercentage(minPricePercentage: BotDto["minPricePercentage"]) {
    this.#dirtyChecker.set("minPricePercentage", minPricePercentage);
  }

  public get maxPricePercentage(): BotDto["maxPricePercentage"] {
    return this.#data.maxPricePercentage;
  }

  public set maxPricePercentage(maxPricePercentage: BotDto["maxPricePercentage"]) {
    this.#dirtyChecker.set("maxPricePercentage", maxPricePercentage);
  }
}

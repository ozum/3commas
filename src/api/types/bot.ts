import { DealStrDto } from "./deal.js";
import type { Convertible, Numerify, Strategy, Stringify, VolumeType } from "./index.js";
import type { StrategyRawDto } from "./strategy.js";

interface BotBaseDto {
  name: string;
  pairs: string | string[];
  maxActiveDeals?: number;
  baseOrderVolume: Convertible;
  baseOrderVolumeType?: VolumeType;
  takeProfit: Convertible;
  safetyOrderVolume: Convertible;
  safetyOrderVolumeType?: VolumeType;
  martingaleStepCoefficient: Convertible;
  martingaleVolumeCoefficient: Convertible;
  maxSafetyOrders: number;
  activeSafetyOrdersCount: number;
  stopLossPercentage?: Convertible;
  cooldown?: Convertible;
  trailingEnabled?: boolean | null;
  trailingDeviation?: Convertible;
  btcPriceLimit?: Convertible;
  strategy?: Strategy;
  safetyOrderStepPercentage: Convertible;
  takeProfitType: "base" | "total";
  strategyList: StrategyRawDto[];
  leverageType?: "custom" | "cross" | "not_specified" | "isolated";
  leverageCustomValue?: Convertible | null;
  minPrice?: Convertible | null;
  maxPrice?: Convertible | null;
  stopLossTimeoutEnabled?: boolean;
  stopLossTimeoutInSeconds?: number;
  minVolumeBtc24h?: Convertible;
  tslEnabled?: boolean;
  dealStartDelaySeconds?: number | null;
  profitCurrency?: "quote_currency" | "base_currency";
  startOrderType?: "limit" | "market";
  stopLossType?: "stop_loss" | "stop_loss_and_disable_bot";
  disableAfterDealsCount?: number | null;
  allowedDealsOnSamePair?: number | null;
  closeDealsTimeout?: number | null;
  minProfitPercentage?: Convertible | null;
  minProfitType?: "base_order_volume" | "total_bought_volume" | null;
  closeStrategyList?: StrategyRawDto[];
  riskReductionPercentage?: Convertible | null;
  reinvestingPercentage?: Convertible | null;
  reinvestedVolumeUsd?: Convertible | null;
  minPricePercentage?: Convertible | null;
  maxPricePercentage?: Convertible | null;
}

export interface BotRawDto extends Required<BotBaseDto> {
  tempId?: number;
  id: number;
  accountId: number;
  accountName: string;
  activeDealsCount: number;
  activeDealsUsdProfit: Convertible;
  dealsCounter: number | null;
  deletable?: boolean;
  easyFormSupported: boolean;
  finishedDealsCount: Convertible;
  finishedDealsProfitUsd: Convertible;
  isEnabled: boolean;
  type: "Bot::MultiBot" | "Bot::SingleBot" | "Bot::SwitchBot";
  urlSecret: string;
  createdAt: string;
  updatedAt: string;
  activeDeals?: DealStrDto[];
  botEvents?: [{ message: string; createdAt: string }];
}

export type BotDto = Numerify<BotRawDto>;
export type BotStrDto = Stringify<BotRawDto>;

export interface BotCreateDto extends Numerify<BotBaseDto> {
  accountId: number;
}

export interface BotUpdateDto extends Numerify<BotBaseDto> {
  id: number;
}

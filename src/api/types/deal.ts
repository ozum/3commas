import { Convertible, Numerify, Strategy, Stringify, VolumeType } from "./index.js";

export type DealStatus =
  | "created"
  | "base_order_placed"
  | "bought"
  | "cancelled"
  | "completed"
  | "failed"
  | "panic_sell_pending"
  | "panic_sell_order_placed"
  | "panic_sold"
  | "cancel_pending"
  | "stop_loss_pending"
  | "stop_loss_finished"
  | "stop_loss_order_placed"
  | "switched"
  | "switched_take_profit"
  | "ttp_activated"
  | "ttp_order_placed"
  | "liquidated"
  | "bought_safety_pending"
  | "bought_take_profit_pending"
  | "settled";

export interface DealRawDto {
  id: number;
  type: string;
  botId: number;
  maxSafetyOrders: number;
  dealHasError: boolean;
  accountId: number;
  activeSafetyOrdersCount: number;
  createdAt: string;
  updatedAt: string;
  closedAt: string;
  finished: boolean;
  currentActiveSafetyOrdersCount: number;
  completedSafetyOrdersCount: number;
  completedManualSafetyOrdersCount: number;
  cancellable: boolean;
  panicSellable: boolean;
  trailingEnabled: boolean;
  tslEnabled: boolean;
  stopLossTimeoutEnabled: boolean;
  stopLossTimeoutInSeconds: number;
  activeManualSafetyOrders: number;
  pair: string;
  status: DealStatus;
  localizedStatus: string;
  takeProfit: Convertible;
  baseOrderVolume: Convertible;
  safetyOrderVolume: Convertible;
  safetyOrderStepPercentage: Convertible;
  leverageType: "isolated";
  leverageCustomValue: Convertible;
  boughtAmount: Convertible;
  boughtVolume: Convertible;
  boughtAveragePrice: Convertible;
  baseOrderAveragePrice: Convertible;
  soldAmount: Convertible;
  soldVolume: Convertible;
  soldAveragePrice: Convertible;
  takeProfitType: "base" | "total";
  finalProfit: Convertible;
  martingaleCoefficient: Convertible;
  martingaleVolumeCoefficient: Convertible;
  martingaleStepCoefficient: Convertible;
  stopLossPercentage: Convertible;
  errorMessage: string;
  profitCurrency: "quote_currency" | "base_currency";
  stopLossType: "stop_loss" | "stop_loss_and_disable_bot";
  safetyOrderVolumeType: VolumeType;
  baseOrderVolumeType: VolumeType;
  fromCurrency: string;
  toCurrency: string;
  currentPrice: Convertible;
  takeProfitPrice: Convertible;
  stopLossPrice: Convertible;
  finalProfitPercentage: Convertible;
  actualProfitPercentage: Convertible;
  botName: string;
  accountName: string;
  usdFinalProfit: Convertible;
  actualProfit: Convertible;
  actualUsdProfit: Convertible;
  failedMessage: string;
  reservedBaseCoin: number;
  reservedSecondCoin: number;
  trailingDeviation: number;
  trailingMaxPrice: number;
  tslMaxPrice: number;
  strategy: Strategy;
  reservedQuoteFunds: number;
  reservedBaseFunds: number;
}

export type DealStrDto = Stringify<DealRawDto>;
export type DealDto = Numerify<DealRawDto>;

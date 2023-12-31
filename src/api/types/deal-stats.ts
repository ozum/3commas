import { Convertible, Numerify, Stringify } from "./index.js";

interface BotDealStatsBaseDto {
  active: number;
  completed: number;
  panicSold: number;
  fromCurrencyIsDollars: boolean;
  completedDealsUsdProfit: Convertible;
  completedDealsBtcProfit: Convertible;
  fundsLockedInActiveDeals: Convertible;
  btcFundsLockedInActiveDeals: Convertible;
  activeDealsUsdProfit: Convertible;
  activeDealsBtcProfit: Convertible;
}

export type BotDealStatsStrDto = Stringify<BotDealStatsBaseDto>;
export type BotDealStatsDto = Numerify<BotDealStatsBaseDto>;

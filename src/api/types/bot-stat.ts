import { Convertible, Numerify, Stringify } from "./index.js";

interface Stat {
  BUSD: Convertible;
  USDT: Convertible;
}

export interface BotStatsRawDto {
  overallStats: Stat;
  todayStats: Stat;
  profitsInUsd: {
    overallUsdProfit: number;
    todayUsdProfit: number;
    activeDealsUsdProfit: number;
    fundsLockedInActiveDeals: number;
  };
}

export type BotStatsStrDto = Stringify<BotStatsRawDto>;
export type BotStatsDto = Numerify<BotStatsRawDto>;

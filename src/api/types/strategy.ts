/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable unicorn/no-null */
// ─── Shared Options ──────────────────────────────────────────────────────────

import { EmptyObject } from "type-fest";
import { Convertible, Numerify, Stringify } from "./index.js";

type StrategyTime = "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "1d" | "3d" | "1w" | "1M" | "cumulative";
type StrategyTriggerCompare = "less" | "greater";
type StrategyTriggerCross = "crossing_above" | "crossing_below";

// ─── Strategies ──────────────────────────────────────────────────────────────

interface StrategyGeneric {
  strategy: "manual" | "nonstop" | "tv_custom_signal" | "cqs_telegram";
  options?: EmptyObject;
}

interface StrategyTAPreset {
  strategy: "ta_preset";
  options?: EmptyObject;
  time: StrategyTime;
  type:
    | "BB-20-1-LB"
    | "BB-20-2-LB"
    | "MFI-14<40"
    | "MFI-14<20"
    | "CCI-40<-200"
    | "BB-20-1-UB"
    | "BB-20-2-UB"
    | "MFI-14>65"
    | "CCI-40>0"
    | "CCI-40>100"
    | "MACD-12-26-9"
    | "Parabolic-SAR"
    | "SMA-20-50"
    | "SMA-50-100"
    | "SMA-50-200"
    | "SMA-100-200"
    | "Heikin-Ashi-1"
    | "Heikin-Ashi-3"
    | "Heikin-Ashi-5";
}
interface StrategyOptions {
  qfl: { type: "original" | "day_trade" | "conservative" | "position"; percent: Convertible };
  tradingView: { time: StrategyTime; type: "buy_or_strong_buy" | "strong_buy" | "sell_or_strong_sell" | "strong_sell" };
  ult: {
    time: StrategyTime;
    points: Convertible;
    triggerCondition: StrategyTriggerCompare | StrategyTriggerCross;
    firstPeriod: number;
    secondPeriod: number;
    thirdPeriod: number;
  };
  bBandsPercent: {
    time: StrategyTime;
    points: Convertible;
    deviation: Convertible;
    timePeriod: Convertible;
    triggerCondition: StrategyTriggerCompare | StrategyTriggerCross;
  };
  maCross: {
    indicatorType: "ema" | "sma";
    time: StrategyTime;
    triggerCondition: StrategyTriggerCross;
    timePeriodFirst: number;
    timePeriodSecond: number;
  };
  adx: {
    time: StrategyTime;
    triggerCondition: StrategyTriggerCompare | StrategyTriggerCross;
    points: Convertible;
    timePeriod: Convertible;
  };
  stochastic: {
    time: StrategyTime;
    points: Convertible;
    triggerCondition: StrategyTriggerCompare | StrategyTriggerCross;
    lineTriggerCondition: StrategyTriggerCross;
    fastKPeriod: number;
    slowKPeriod: number;
    slowDPeriod: number;
  };
  macd: {
    time: StrategyTime;
    triggerCondition: StrategyTriggerCross;
    lineTriggerCondition: StrategyTriggerCompare;
    fastPeriod: Convertible;
    slowPeriod: Convertible;
    signalPeriod: Convertible;
  };
  parabolicSar: {
    time: StrategyTime;
    triggerCondition: StrategyTriggerCross;
    accelerationFactor: Convertible;
    afMaximum: Convertible;
  };
  rsi: {
    time: StrategyTime;
    points: Convertible;
    triggerCondition: StrategyTriggerCompare | StrategyTriggerCross;
    timePeriod: Convertible;
  };
  mfi: {
    time: StrategyTime;
    points: Convertible;
    triggerCondition: StrategyTriggerCross;
    timePeriod: Convertible;
  };
  cci: {
    time: StrategyTime;
    points: Convertible;
    triggerCondition: StrategyTriggerCompare | StrategyTriggerCross;
    timePeriod: Convertible;
  };
  heikinAshi: {
    time: StrategyTime;
    candlesCount: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  };
}

interface Strategy<S extends keyof StrategyOptions> {
  strategy: S;
  options: StrategyOptions[S];
}

interface StrategyDetailsBase {
  strategyType: "signal" | "indicator";
  payed: boolean;
  beta: boolean;
  name: string;
  accountsWhitelist?: string[];
}

export type StrategyDetails = {
  [K in keyof StrategyOptions]: StrategyDetailsBase & {
    options: {
      [N in keyof StrategyOptions[K]]?: StrategyOptions[K][N] extends string
        ? Partial<Record<StrategyOptions[K][N], string | Convertible>> | null
        : null;
    };
  };
} & Partial<Record<StrategyGeneric["strategy"], StrategyDetailsBase>>;

export type StrategyRawDto =
  | Strategy<"qfl">
  | Strategy<"tradingView">
  | Strategy<"ult">
  | Strategy<"bBandsPercent">
  | Strategy<"maCross">
  | Strategy<"adx">
  | Strategy<"stochastic">
  | Strategy<"macd">
  | Strategy<"parabolicSar">
  | Strategy<"rsi">
  | Strategy<"mfi">
  | Strategy<"cci">
  | Strategy<"heikinAshi">
  | StrategyGeneric
  | StrategyTAPreset;

export type StrategyStrDto = Stringify<StrategyRawDto>;
export type StrategyDto = Numerify<StrategyRawDto>;

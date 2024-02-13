import type { Method } from "../client.js";

/* eslint-disable @typescript-eslint/no-empty-interface */
export * from "./account.js";
export * from "./bot.js";
export * from "./bot-stat.js";

export * from "./deal-stats.js";
export * from "./deal.js";
export * from "./market.js";
export * from "./portfolio-entry.js";
export * from "./portfolio.js";

export * from "./profit.js";
export * from "./strategy.js";
export * from "./trade-info.js";
export * from "./trading-entiities.js";
export * from "./user-balance.js";

export type RelaxKey<T> = T extends object ? keyof T : string;
export type RelaxInput<T, K extends keyof T> = T | T[K]; // T = { id: 3 } => { id : 3 } or 3
export type RelaxObject<T, K extends RelaxKey<T>> = T extends object ? T : { [P in K]: T }; // T = { id: 3 } or 3 => { id: 3 }
export type RelaxValue<T, K extends RelaxKey<T>> = T extends object ? (K extends keyof T ? T[K] : never) : T; // T = { id: 3 } or 3 => 3

export interface ThreeCommasError {
  error: string;
  error_description: string;
  error_attributes: Record<string, string>;
}

export interface AugmentedThreeCommasError extends ThreeCommasError {
  method: Method;
  path: string;
  id?: number;
  pairs?: string | string[];
}

export type Strategy = "long" | "short";

export type Convertible = "CONVERTIBLE";

type Defined<T> = Exclude<T, undefined>;
type Convert<S, T> = {
  [K in keyof S]: Defined<S[K]> extends Convertible
    ? T
    : Defined<S[K]> extends Convertible | null
    ? T | null
    : Defined<S[K]> extends object
    ? Convert<S[K], T>
    : S[K];
};

export type Numerify<S> = Convert<S, number>;
export type Stringify<S> = Convert<S, string>;

export interface CurrencyAmount {
  currency: string;
  amount: Convertible;
}

/** Converitble type from converted type. */
export type RawData<T> = T extends Numerify<infer X> | Stringify<infer X> ? X : T;

/** Converted type from convertible or already converted type. */
export type Data<T, CN extends boolean> = CN extends true ? Numerify<RawData<T>> : Stringify<RawData<T>>;
export type Response<T, CN extends boolean> = Promise<Data<T, CN>>;

export type QuoteCurrency = string;
export type BaseCurrency = string;

export interface PairObject {
  base: string;
  quote: string;
  number?: number | undefined;
}

export type PairArray = [BaseCurrency, QuoteCurrency, (number | undefined)?];

export type Pair = string | PairObject | PairArray;

export type VolumeType = "quote_currency" | "base_currency" | "percent" | "xbt";

export interface OrderVolumeOptions {
  totalPercent: number;
  safetyPercent: number;
  safetyCount: number;
  safetyVolumeScale: number;
  capital?: number;
}

import type { PairObject, PairArray, Pair } from "../index.js";
import { MarketCode } from "../types/market.js";

type ParsedPair = [string, string, string?];

const pairFunctions = {
  common: {
    toString: ({ base, quote }: PairObject): string => `${quote}_${base}`,
    toObject: (pair: string): PairObject => {
      const [quote, base] = pair.split("_") as ParsedPair;
      return { quote, base };
    },
  },
  futures: {
    toString: ({ base, quote, number }: PairObject): string => `${quote}_${base}${quote}${number ? `_${number}` : ""}`,
    toObject: (pair: string): PairObject => {
      const [quote, contract, number] = pair.split("_") as ParsedPair;
      return { quote, base: contract.slice(0, Math.max(0, contract.length - quote.length)), ...(number ? { number: Number(number) } : {}) };
    },
  },
  binanceFuturesCoin: {
    toString: ({ base, quote, number }: PairObject): string => `${base}_${base}${quote}_${number ?? "PERP"}`,
    toObject: (pair: string): PairObject => {
      const [base, contract, number] = pair.split("_") as ParsedPair;
      return { base, quote: contract.slice(Math.max(0, contract.length - base.length)), ...(number ? { number: Number(number) } : {}) };
    },
  },
  gateUsdtPerpetual: {
    toString: ({ base, quote }: PairObject): string => `${quote}_${base}_${quote}`,
    toObject: (pair: string): PairObject => {
      const [quote, base] = pair.split("_") as ParsedPair;
      return { quote, base };
    },
  },
  bybitFutures: {
    toString: ({ base, quote }: PairObject): string => `${base}_${base}${quote}`,
    toObject: (pair: string): PairObject => {
      const [base, contract] = pair.split("_") as ParsedPair;
      return { base, quote: contract.slice(Math.max(0, contract.length - base.length)) };
    },
  },
};

interface PairFunctions {
  toString: ({ base, quote, number }: PairObject) => string;
  toObject: (pair: string) => PairObject;
}

const exchangePairFunctions: Record<MarketCode, PairFunctions> = {
  binance_futures: pairFunctions.futures,
  binance_margin: pairFunctions.common,
  binance_tr: pairFunctions.common,
  binance_futures_coin: pairFunctions.binanceFuturesCoin,
  bybit_usdt_perpetual: pairFunctions.futures,
  gate_io_usdt_perpetual: pairFunctions.gateUsdtPerpetual,
  trx: pairFunctions.common,
  bitstamp: pairFunctions.common,
  gdax: pairFunctions.common,
  huobi: pairFunctions.common,
  gate_io: pairFunctions.common,
  bybit: pairFunctions.bybitFutures,
  bybit_spot: pairFunctions.common,
  binance: pairFunctions.common,
  crypto_com: pairFunctions.common,
  bitfinex: pairFunctions.common,
  bittrex: pairFunctions.common,
  gemini: pairFunctions.common,
  kucoin: pairFunctions.common,
  okex: pairFunctions.common,
  kraken: pairFunctions.common,
  binance_us: pairFunctions.common,
};

export function toPairObject(marketCode: MarketCode, pair: Pair): PairObject {
  if (typeof pair === "string") return exchangePairFunctions[marketCode].toObject(pair);
  if (Array.isArray(pair)) return { base: pair[0], quote: pair[1], number: pair[2] };
  return pair;
}

export function toPairString(marketCode: MarketCode, pair: Pair): string {
  if (typeof pair === "string") return pair;
  if (Array.isArray(pair)) return exchangePairFunctions[marketCode].toString({ base: pair[0], quote: pair[1], number: pair[2] });
  return exchangePairFunctions[marketCode].toString(pair);
}

export function toPairArray(marketCode: MarketCode, pair: Pair): PairArray {
  if (Array.isArray(pair)) return pair;
  const { base, quote, number } = typeof pair === "string" ? exchangePairFunctions[marketCode].toObject(pair) : pair;
  return [base, quote, number];
}

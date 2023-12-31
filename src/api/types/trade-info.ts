import { Convertible, Numerify, Stringify } from "./index.js";

interface Ticker {
  last: Convertible;
  bid: Convertible;
  ask: Convertible;
  name: string; // i.e. "BTCUSDT"
  orderbookAsk: Convertible;
  orderbookBid: Convertible;
  orderbookLast: Convertible;
  orderbookPriceCurrency: string; // i.e. "USDT"
  strategyName: string; // i.e. "orderbook_price"
  contractStrategyName: string; // i.e. "orderbook_price"
  instrumentKind: string; // i.e. "linear_futures"
  priceStep: Convertible;
  minLotSize: Convertible;
  maxLotSize: Convertible;
  lotStep: Convertible;
  maxMarketBuyAmount: Convertible;
  maxMarketSellAmount: Convertible;
  minMarketBuyAmount: Convertible;
  minMarketSellAmount: Convertible;
  minTotal: Convertible;
  bidMultiplierUp: Convertible;
  askMultiplierDown: Convertible;
  minPrice: Convertible;
  maxPrice: Convertible;
}

export interface TradeInfoRawDto {
  availableForTradeBalances: Record<string, Convertible>;
  ticker: Record<string, Ticker>;
}

export interface SellInfoRawDto {
  availableForSellBalances: Record<string, Convertible>;
  ticker: Record<string, Ticker>;
}

export type TradeInfoStrDto = Stringify<TradeInfoRawDto>;
export type TradeInfoDto = Numerify<TradeInfoRawDto>;

export type SellInfoStrDto = Stringify<SellInfoRawDto>;
export type SellInfoDto = Numerify<SellInfoRawDto>;

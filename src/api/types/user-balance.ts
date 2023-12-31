import { Convertible, CurrencyAmount, Numerify, Stringify } from "./index.js";

export interface UserBalanceTableDto {
  currencyCode: string;
  currencyName: number;
  currencyIcon: string;
  currencySlug: number;
  percentage: number;
  position: number;
  positionAvailable: number;
  positionType: number;
  borrowed: number;
  onOrders: number;
  onOrdersWithLeverage: number;
  onOrdersLong: number;
  onOrdersShort: number;
  equity: number;
  currentPrice: number;
  currentPriceUsd: number;
  dayChangePercent: number;
  dayChangePercentBtc: number;
  dayChangePercentUsd: number;
  btcValue: number;
  usdValue: number;
  availableLong: number;
  availableShort: number;
  availableWithLeverageLong: number;
  availableWithLeverageShort: number;
  accountId: number;
  isWallet: boolean;
}

export interface UserBalanaceChartRawDto {
  code: string;
  coinmarketcapid: string;
  name: string;
  y: number;
  percentage: number;
  amount: number;
  btcValue: Convertible;
  usdValue: Convertible;
  primaryDisplayCurrency: CurrencyAmount;
  accountId: number;
}

export type UserBalanceChartStrDto = Stringify<UserBalanaceChartRawDto>;
export type UserBalanceChartDto = Numerify<UserBalanaceChartRawDto>;

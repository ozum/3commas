import type { Convertible, Numerify, Stringify, CurrencyAmount } from "../types/index.js";
import type { MarketCode } from "../types/market.js";
import type { PortfolioDto } from "../types/portfolio.js";

interface AccountBaseDto {
  name: string;
  apiKey?: string;
  customerId?: string | null;
  subaccountName?: string | null;
  includeInSummary?: boolean;
}

export interface AccountRawDto extends Required<AccountBaseDto> {
  id: number;
  autoBalancePeriod: number;
  autoBalancePortfolioId: number | null;
  autoBalanceCurrencyChangeLimit: number | null;
  autobalanceEnabled: boolean;
  hedgeModeAvailable: boolean;
  hedgeModeEnabled: boolean;
  isLocked: boolean;
  smartTradingSupported: boolean;
  availableForTrading: object;
  statsSupported: boolean;
  tradingSupported: boolean;
  marketBuySupported: boolean;
  marketSellSupported: boolean;
  conditionalBuySupported: boolean;
  botsAllowed: boolean;
  botsTtpAllowed: boolean;
  botsTslAllowed: boolean;
  gordonBotsAvailable: boolean;
  multiBotsAllowed: boolean;
  createdAt: string;
  updatedAt: string;
  lastAutoBalance: number | null;
  fastConvertAvailable: boolean;
  gridBotsAllowed: boolean;
  apiKeyInvalid: boolean;
  marketIcon: string;
  depositEnabled: boolean;
  supportedMarketTypes: ("spot" | "futures")[];
  primaryDisplayCurrencyProfitPercentage: CurrencyAmount;
  primaryDisplayCurrencyProfit: CurrencyAmount;
  dayProfitPrimaryDisplayCurrencyPercentage: CurrencyAmount;
  dayProfitPrimaryDisplayCurrency: CurrencyAmount;
  primaryDisplayCurrencyAmount: CurrencyAmount;
  totalPrimaryDisplayCurrencyProfit: CurrencyAmount;
  availableIncludeInSummary: boolean;
  autoBalanceMethod: string | null;
  autoBalanceError: string | null;
  lockReason: string | null;
  btcAmount: Convertible;
  usdAmount: Convertible;
  dayProfitBtc: Convertible;
  dayProfitUsd: Convertible;
  dayProfitBtcPercentage: Convertible;
  dayProfitUsdPercentage: Convertible;
  btcProfit: Convertible;
  usdProfit: Convertible;
  usdProfitPercentage: Convertible;
  btcProfitPercentage: Convertible;
  totalBtcProfit: Convertible;
  totalUsdProfit: Convertible;
  prettyDisplayType: string;
  exchangeName: string;
  marketCode: MarketCode;
  address?: string;
  autoBalancePortfolio?: PortfolioDto;
  secret?: string;
  passphrase?: string;
}

export type AccountDto = Numerify<AccountRawDto>;
export type AccountStrDto = Stringify<AccountRawDto>;

export interface AccountCreateDto extends Numerify<AccountBaseDto> {
  type: MarketCode;
  typesToCreate?: MarketCode[];
  secret?: string;
  passphrase?: string;
}

export interface AccountUpdateDto extends Numerify<AccountBaseDto> {
  accountId: number;
  secret?: string;
  passphrase?: string;
}

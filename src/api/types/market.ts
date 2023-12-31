interface FormField {
  field: string;
  localizedName: string;
}

// Some types are not supported by this library. So they are discarded from the type list.
export type MarketCode =
  | "binance_futures"
  | "binance_margin"
  | "binance_tr"
  | "binance_futures_coin"
  | "bybit_usdt_perpetual"
  // | "gate_io_btc_perpetual"
  | "gate_io_usdt_perpetual"
  // | "bsc"
  //  | "ethereumwallet"
  | "trx"
  | "bitstamp"
  | "gdax"
  | "huobi"
  | "gate_io"
  | "bybit"
  // | "deribit"
  | "bybit_spot"
  | "binance"
  | "crypto_com"
  // | "okex_futures"
  | "bitfinex"
  | "bittrex"
  | "gemini"
  | "kucoin"
  | "okex"
  | "kraken"
  | "binance_us";

export interface MarketDto {
  marketName: string;
  marketUrl: string;
  marketIcon: string;
  marketTrustMessage: string;
  helpLink: string;
  nomicsId: string;
  marketCode: MarketCode;
  formFields: {
    required: FormField[];
    optional: FormField[];
  };
  connectionType: string;
  availableConnectionFlows: string[];
  trustedIps: string[];
  trustedIpsInputType: string;
  fastConnectActionName: string;
}

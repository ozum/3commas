import { Convertible, Numerify, Stringify } from "./index.js";

export interface ProfitRawDto {
  data: {
    sDate: string;
    unixTimestamp: number;
    profit: { btc: Convertible; usd: Convertible };
  }[];
}

export type ProfitStrDto = Stringify<ProfitRawDto>;
export type ProfitDto = Numerify<ProfitRawDto>;

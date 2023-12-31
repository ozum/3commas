/* eslint-disable unicorn/no-null */
import { Client } from "./client.js";
import type {
  Id,
  SellInfoRawDto,
  TradeInfoRawDto,
  ProfitRawDto,
  BotRawDto,
  BotStatsRawDto,
  BotCreateDto,
  BotUpdateDto,
  Strategy,
  StrategyDetails,
  DealRawDto,
} from "./types/index.js";
import { getAll, getId } from "./utils/index.js";

export interface BotQueryParams {
  limit?: number;
  offset?: number;
  /** Param for a filter by created date */
  from?: string;
  /** Account to show bots on. Return all if not specified. Gather this from GET /ver1/accounts */
  accountId?: number;
  scope?: "enabled" | "disabled";
  strategy?: Strategy;
  sortBy?: "profit" | "created_at" | "updated_at";
  sortDirection?: "asc" | "desc";
  /** Quote currency */
  quote?: string;
  /** Param for a filter by bot form type */
  formType?: "gordon" | "advanced";
}

export async function getAllBots<CN extends boolean = true>(params?: BotQueryParams, client: Client<CN> = Client.defaultClient) {
  return getAll<BotRawDto[], CN>(100, 2, getBots, client, params);
}

export async function getBots<CN extends boolean = true>(params?: BotQueryParams, client: Client<CN> = Client.defaultClient) {
  return client.get<BotRawDto[]>("/ver1/bots", params);
}

export async function getBot<CN extends boolean = true>(
  params: { id: number; includeEvents?: boolean },
  client: Client<CN> = Client.defaultClient,
) {
  return client.get<BotRawDto>(`/ver1/bots/${params.id}/show`, params);
}

export async function createBot<CN extends boolean = true>(params: BotCreateDto, client: Client<CN> = Client.defaultClient) {
  return client.post<BotRawDto>("/ver1/bots/create_bot", params);
}

export async function copyBot<CN extends boolean = true>(
  params: { id: number; name: string; secret: string; amount?: number },
  client: Client<CN> = Client.defaultClient,
) {
  return client.post<BotRawDto>(`/ver1/bots/${params.id}/copy_and_create`, params);
}

export async function updateBot<CN extends boolean = true>(params: BotUpdateDto, client: Client<CN> = Client.defaultClient) {
  return client.patch<BotRawDto>(`/ver1/bots/${params.id}/update`, { botId: params.id, ...params });
}

export async function deleteBot<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.post<boolean>(`/ver1/bots/${getId(params)}/delete`);
}

export async function startBot<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.post<BotRawDto>(`/ver1/bots/${getId(params)}/enable`);
}

export async function stopBot<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.post<BotRawDto>(`/ver1/bots/${getId(params)}/disable`);
}

export async function getStrategyList<CN extends boolean = true>(
  params?: { accountId?: number; type?: "simple" | "composite"; strategy?: Strategy },
  client: Client<CN> = Client.defaultClient,
) {
  return client.get<StrategyDetails>("/ver1/bots/strategy_list", params);
}

export async function getSellInfo<CN extends boolean = true>(params: { accountId: number }, client: Client<CN> = Client.defaultClient) {
  return client.get<SellInfoRawDto>("/ver1/bots/account_trade_info_smart_sell", params);
}

export async function getTradeInfo<CN extends boolean = true>(params: { accountId: number }, client: Client<CN> = Client.defaultClient) {
  return client.get<TradeInfoRawDto>("/ver1/bots/account_trade_info", params);
}

export async function getPairsBlackList<CN extends boolean = true>(client: Client<CN> = Client.defaultClient) {
  return client.get<{ pairs: string[] }>("/ver1/bots/pairs_black_list");
}

export async function getBotStats<CN extends boolean = true>(
  params: { date?: string; accountId?: number; id?: number } = {},
  client: Client<CN> = Client.defaultClient,
) {
  const url = params.date ? "/ver1/bots/stats_by_date" : "/ver1/bots/stats";
  return client.get<BotStatsRawDto>(url, params);
}

export async function getProfitByDay<CN extends boolean = true>(
  params: { id: number; days?: number },
  client: Client<CN> = Client.defaultClient,
) {
  return client.get<ProfitRawDto>(`/ver1/bots/${params.id}/profit_by_day`, params);
}

export async function startNewDeal<CN extends boolean = true>(
  params: {
    id: number;
    /** Used for multi pair Can be omitted for simple bots. */
    pair?: string;
    /** If false or not specified then all paramaters like signals or volume filters will be checked. If true - those checks will be skipped */
    skipSignalChecks?: boolean;
    /** If true then you will be allowed to open more then one deal per pair in composite bot */
    skipOpenDealsChecks?: boolean;
    /** If set true and bot disabled will return error(422 code), if false and bot disabled then enable it */
    onlyForEnabled?: boolean;
  },
  client: Client<CN> = Client.defaultClient,
) {
  return client.post<DealRawDto>(`/ver1/bots/${params.id}/start_new_deal`);
}

export async function sellAllBotDeals<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.post<BotRawDto>(`/ver1/bots/${getId(params)}/panic_sell_all_deals`);
}

export async function cancelAllBotDeal<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.post<BotRawDto>(`/ver1/bots/${getId(params)}/cancel_all_deals`);
}

export async function getBotDealsStats<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.get<BotStatsRawDto>(`/ver1/bots/${getId(params)}/deals_stats`);
}

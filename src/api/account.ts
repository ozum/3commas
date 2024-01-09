import { Client } from "./client.js";
import type {
  AccountCreateDto,
  AccountRawDto,
  AccountUpdateDto,
  MarketCode,
  MarketDto,
  RelaxInput,
  UserBalanaceChartRawDto,
  UserBalanceTableDto,
} from "./types/index.js";
import { getAll, getRelaxObject, getRelaxValue } from "./utils/index.js";

export interface AccountQueryParams {
  apiKey?: string; // Filter by api key
  page?: number;
  perPage?: number; // Page size, from 1 to 100
}

type Id = RelaxInput<{ id: number }, "id">;

/**
 * Transfers coins between accounts.
 *
 * @param currency is the currency code (example: USDT)
 * @param amount is the amount to transfer.
 * @param fromAccountId is the sender account ID. (Possible values in /transfer_data)
 * @param toAccountId is the recipient account ID. (Possible values in /transfer_data)
 * @param client is the client.
 */
export async function transfer(
  params: { currency: string; amount: number; toAccountId: number; fromAccountId: number },
  client = Client.defaultClient,
): Promise<object> {
  return client.post("/ver1/accounts/transfer", params);
}

export async function getMarketTypes(
  params: { type: MarketCode; name: string; api_key?: string; secret?: string },
  client = Client.defaultClient,
) {
  return client.get("/ver1/accounts/types_to_connect", params);
}

export async function getAllAccounts<CN extends boolean = true>(params?: AccountQueryParams, client: Client<CN> = Client.defaultClient) {
  return getAll<AccountRawDto[], CN>(100, 1, getAccounts, client, params);
}

export async function getAccounts<CN extends boolean = true>(params?: AccountQueryParams, client: Client<CN> = Client.defaultClient) {
  return client.get<AccountRawDto[]>("/ver1/accounts", params);
}

export async function getAccount<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.get<AccountRawDto>(`/ver1/accounts/${getRelaxValue(params, "id")}`);
}

export async function getMarketList<CN extends boolean = true>(client: Client<CN> = Client.defaultClient) {
  return client.get<MarketDto[]>("/ver1/accounts/market_list");
}

export async function createAccount<CN extends boolean = true>(params?: AccountCreateDto, client: Client<CN> = Client.defaultClient) {
  return client.post<AccountRawDto>("/ver1/accounts/new", params);
}

export async function updateAccount<CN extends boolean = true>(params: AccountUpdateDto, client: Client<CN> = Client.defaultClient) {
  return client.post<AccountRawDto>("/ver1/accounts/update", params);
}

export async function deleteAccount<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.post<boolean>(`/ver1/accounts/${getRelaxValue(params, "id")}/remove`);
}

export async function renameAccount<CN extends boolean = true>(
  params: { id: number; name: string },
  client: Client<CN> = Client.defaultClient,
) {
  return client.post<AccountRawDto>(`/ver1/accounts/${params.id}/rename`, params);
}

export async function getMarketPairs<CN extends boolean = true>(
  params: RelaxInput<{ marketCode: MarketCode }, "marketCode">,
  client: Client<CN> = Client.defaultClient,
) {
  return client.get<string[]>("/v2/accounts/market_pairs", getRelaxObject(params, "marketCode"));
}

export async function getAccountTable<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.post<UserBalanceTableDto>(`/ver1/accounts/${getRelaxValue(params, "id")}/account_table_data`);
}

export async function getAccountChart<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.post<UserBalanaceChartRawDto>(`/ver1/accounts/${getRelaxValue(params, "id")}/pie_chart_data`);
}

export async function getActiveTradingEntities<CN extends boolean = true>(params: Id, client: Client<CN> = Client.defaultClient) {
  return client.get<string[]>(`/ver1/accounts/${getRelaxValue(params, "id")}/active_trading_entities`);
}

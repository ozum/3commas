3commas

# 3commas

## Table of contents

### Classes

- [Account](classes/Account.md)
- [Bot](classes/Bot.md)
- [Client](classes/Client.md)
- [ThreeCommas](classes/ThreeCommas.md)

### Interfaces

- [AccountCreateDto](interfaces/AccountCreateDto.md)
- [AccountQueryParams](interfaces/AccountQueryParams.md)
- [AccountRawDto](interfaces/AccountRawDto.md)
- [AccountUpdateDto](interfaces/AccountUpdateDto.md)
- [AugmentedThreeCommasError](interfaces/AugmentedThreeCommasError.md)
- [BotCreateDto](interfaces/BotCreateDto.md)
- [BotQueryParams](interfaces/BotQueryParams.md)
- [BotRawDto](interfaces/BotRawDto.md)
- [BotStatsRawDto](interfaces/BotStatsRawDto.md)
- [BotUpdateDto](interfaces/BotUpdateDto.md)
- [CurrencyAmount](interfaces/CurrencyAmount.md)
- [DealRawDto](interfaces/DealRawDto.md)
- [MarketDto](interfaces/MarketDto.md)
- [OrderVolumeOptions](interfaces/OrderVolumeOptions.md)
- [PairObject](interfaces/PairObject.md)
- [PortfolioDto](interfaces/PortfolioDto.md)
- [PortfolioEntry](interfaces/PortfolioEntry.md)
- [ProfitRawDto](interfaces/ProfitRawDto.md)
- [SellInfoRawDto](interfaces/SellInfoRawDto.md)
- [ThreeCommasError](interfaces/ThreeCommasError.md)
- [TradeInfoRawDto](interfaces/TradeInfoRawDto.md)
- [TradingEntities](interfaces/TradingEntities.md)
- [UserBalanaceChartRawDto](interfaces/UserBalanaceChartRawDto.md)
- [UserBalanceTableDto](interfaces/UserBalanceTableDto.md)

### Type Aliases

- [AccountDto](README.md#accountdto)
- [AccountStrDto](README.md#accountstrdto)
- [BaseCurrency](README.md#basecurrency)
- [BotDealStatsDto](README.md#botdealstatsdto)
- [BotDealStatsStrDto](README.md#botdealstatsstrdto)
- [BotDto](README.md#botdto)
- [BotStatsDto](README.md#botstatsdto)
- [BotStatsStrDto](README.md#botstatsstrdto)
- [BotStrDto](README.md#botstrdto)
- [Convertible](README.md#convertible)
- [Data](README.md#data)
- [DealDto](README.md#dealdto)
- [DealStatus](README.md#dealstatus)
- [DealStrDto](README.md#dealstrdto)
- [MarketCode](README.md#marketcode)
- [Numerify](README.md#numerify)
- [Pair](README.md#pair)
- [PairArray](README.md#pairarray)
- [ProfitDto](README.md#profitdto)
- [ProfitStrDto](README.md#profitstrdto)
- [QuoteCurrency](README.md#quotecurrency)
- [RawData](README.md#rawdata)
- [RelaxInput](README.md#relaxinput)
- [RelaxKey](README.md#relaxkey)
- [RelaxObject](README.md#relaxobject)
- [RelaxValue](README.md#relaxvalue)
- [Response](README.md#response)
- [SellInfoDto](README.md#sellinfodto)
- [SellInfoStrDto](README.md#sellinfostrdto)
- [Strategy](README.md#strategy)
- [StrategyDetails](README.md#strategydetails)
- [StrategyDto](README.md#strategydto)
- [StrategyRawDto](README.md#strategyrawdto)
- [StrategyStrDto](README.md#strategystrdto)
- [Stringify](README.md#stringify)
- [TradeInfoDto](README.md#tradeinfodto)
- [TradeInfoStrDto](README.md#tradeinfostrdto)
- [UserBalanceChartDto](README.md#userbalancechartdto)
- [UserBalanceChartStrDto](README.md#userbalancechartstrdto)
- [VolumeType](README.md#volumetype)

### Functions

- [cancelAllBotDeal](README.md#cancelallbotdeal)
- [copyBot](README.md#copybot)
- [createAccount](README.md#createaccount)
- [createBot](README.md#createbot)
- [deleteAccount](README.md#deleteaccount)
- [deleteBot](README.md#deletebot)
- [getAccount](README.md#getaccount)
- [getAccountChart](README.md#getaccountchart)
- [getAccountTable](README.md#getaccounttable)
- [getAccounts](README.md#getaccounts)
- [getActiveTradingEntities](README.md#getactivetradingentities)
- [getAll](README.md#getall)
- [getAllAccounts](README.md#getallaccounts)
- [getAllBots](README.md#getallbots)
- [getBot](README.md#getbot)
- [getBotDealsStats](README.md#getbotdealsstats)
- [getBotStats](README.md#getbotstats)
- [getBots](README.md#getbots)
- [getMarketList](README.md#getmarketlist)
- [getMarketPairs](README.md#getmarketpairs)
- [getMarketTypes](README.md#getmarkettypes)
- [getPairsBlackList](README.md#getpairsblacklist)
- [getProfitByDay](README.md#getprofitbyday)
- [getSellInfo](README.md#getsellinfo)
- [getStrategyList](README.md#getstrategylist)
- [getTradeInfo](README.md#gettradeinfo)
- [parallelSettled](README.md#parallelsettled)
- [renameAccount](README.md#renameaccount)
- [sellAllBotDeals](README.md#sellallbotdeals)
- [startBot](README.md#startbot)
- [startNewDeal](README.md#startnewdeal)
- [stopBot](README.md#stopbot)
- [transfer](README.md#transfer)
- [updateAccount](README.md#updateaccount)
- [updateBot](README.md#updatebot)

## Type Aliases

### AccountDto

Ƭ **AccountDto**: [`Numerify`](README.md#numerify)\<[`AccountRawDto`](interfaces/AccountRawDto.md)\>

#### Defined in

[api/types/account.ts:74](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/account.ts#L74)

---

### AccountStrDto

Ƭ **AccountStrDto**: [`Stringify`](README.md#stringify)\<[`AccountRawDto`](interfaces/AccountRawDto.md)\>

#### Defined in

[api/types/account.ts:75](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/account.ts#L75)

---

### BaseCurrency

Ƭ **BaseCurrency**: `string`

#### Defined in

[api/types/index.ts:70](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L70)

---

### BotDealStatsDto

Ƭ **BotDealStatsDto**: [`Numerify`](README.md#numerify)\<`BotDealStatsBaseDto`\>

#### Defined in

[api/types/deal-stats.ts:17](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/deal-stats.ts#L17)

---

### BotDealStatsStrDto

Ƭ **BotDealStatsStrDto**: [`Stringify`](README.md#stringify)\<`BotDealStatsBaseDto`\>

#### Defined in

[api/types/deal-stats.ts:16](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/deal-stats.ts#L16)

---

### BotDto

Ƭ **BotDto**: [`Numerify`](README.md#numerify)\<[`BotRawDto`](interfaces/BotRawDto.md)\>

#### Defined in

[api/types/bot.ts:73](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L73)

---

### BotStatsDto

Ƭ **BotStatsDto**: [`Numerify`](README.md#numerify)\<[`BotStatsRawDto`](interfaces/BotStatsRawDto.md)\>

#### Defined in

[api/types/bot-stat.ts:20](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot-stat.ts#L20)

---

### BotStatsStrDto

Ƭ **BotStatsStrDto**: [`Stringify`](README.md#stringify)\<[`BotStatsRawDto`](interfaces/BotStatsRawDto.md)\>

#### Defined in

[api/types/bot-stat.ts:19](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot-stat.ts#L19)

---

### BotStrDto

Ƭ **BotStrDto**: [`Stringify`](README.md#stringify)\<[`BotRawDto`](interfaces/BotRawDto.md)\>

#### Defined in

[api/types/bot.ts:74](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L74)

---

### Convertible

Ƭ **Convertible**: `"CONVERTIBLE"`

#### Defined in

[api/types/index.ts:41](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L41)

---

### Data

Ƭ **Data**\<`T`, `CN`\>: `CN` extends `true` ? [`Numerify`](README.md#numerify)\<[`RawData`](README.md#rawdata)\<`T`\>\> : [`Stringify`](README.md#stringify)\<[`RawData`](README.md#rawdata)\<`T`\>\>

Converted type from convertible or already converted type.

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `T`  | `T`               |
| `CN` | extends `boolean` |

#### Defined in

[api/types/index.ts:66](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L66)

---

### DealDto

Ƭ **DealDto**: [`Numerify`](README.md#numerify)\<[`DealRawDto`](interfaces/DealRawDto.md)\>

#### Defined in

[api/types/deal.ts:99](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/deal.ts#L99)

---

### DealStatus

Ƭ **DealStatus**: `"created"` \| `"base_order_placed"` \| `"bought"` \| `"cancelled"` \| `"completed"` \| `"failed"` \| `"panic_sell_pending"` \| `"panic_sell_order_placed"` \| `"panic_sold"` \| `"cancel_pending"` \| `"stop_loss_pending"` \| `"stop_loss_finished"` \| `"stop_loss_order_placed"` \| `"switched"` \| `"switched_take_profit"` \| `"ttp_activated"` \| `"ttp_order_placed"` \| `"liquidated"` \| `"bought_safety_pending"` \| `"bought_take_profit_pending"` \| `"settled"`

#### Defined in

[api/types/deal.ts:3](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/deal.ts#L3)

---

### DealStrDto

Ƭ **DealStrDto**: [`Stringify`](README.md#stringify)\<[`DealRawDto`](interfaces/DealRawDto.md)\>

#### Defined in

[api/types/deal.ts:98](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/deal.ts#L98)

---

### MarketCode

Ƭ **MarketCode**: `"binance_futures"` \| `"binance_margin"` \| `"binance_tr"` \| `"binance_futures_coin"` \| `"bybit_usdt_perpetual"` \| `"gate_io_usdt_perpetual"` \| `"trx"` \| `"bitstamp"` \| `"gdax"` \| `"huobi"` \| `"gate_io"` \| `"bybit"` \| `"bybit_spot"` \| `"binance"` \| `"crypto_com"` \| `"bitfinex"` \| `"bittrex"` \| `"gemini"` \| `"kucoin"` \| `"okex"` \| `"kraken"` \| `"binance_us"`

#### Defined in

[api/types/market.ts:7](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/market.ts#L7)

---

### Numerify

Ƭ **Numerify**\<`S`\>: `Convert`\<`S`, `number`\>

#### Type parameters

| Name |
| :--- |
| `S`  |

#### Defined in

[api/types/index.ts:54](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L54)

---

### Pair

Ƭ **Pair**: `string` \| [`PairObject`](interfaces/PairObject.md) \| [`PairArray`](README.md#pairarray)

#### Defined in

[api/types/index.ts:80](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L80)

---

### PairArray

Ƭ **PairArray**: [[`BaseCurrency`](README.md#basecurrency), [`QuoteCurrency`](README.md#quotecurrency), number?]

#### Defined in

[api/types/index.ts:78](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L78)

---

### ProfitDto

Ƭ **ProfitDto**: [`Numerify`](README.md#numerify)\<[`ProfitRawDto`](interfaces/ProfitRawDto.md)\>

#### Defined in

[api/types/profit.ts:12](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/profit.ts#L12)

---

### ProfitStrDto

Ƭ **ProfitStrDto**: [`Stringify`](README.md#stringify)\<[`ProfitRawDto`](interfaces/ProfitRawDto.md)\>

#### Defined in

[api/types/profit.ts:11](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/profit.ts#L11)

---

### QuoteCurrency

Ƭ **QuoteCurrency**: `string`

#### Defined in

[api/types/index.ts:69](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L69)

---

### RawData

Ƭ **RawData**\<`T`\>: `T` extends [`Numerify`](README.md#numerify)\<infer X\> \| [`Stringify`](README.md#stringify)\<infer X\> ? `X` : `T`

Converitble type from converted type.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[api/types/index.ts:63](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L63)

---

### RelaxInput

Ƭ **RelaxInput**\<`T`, `K`\>: `T` \| `T`[`K`]

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `T`  | `T`               |
| `K`  | extends keyof `T` |

#### Defined in

[api/types/index.ts:22](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L22)

---

### RelaxKey

Ƭ **RelaxKey**\<`T`\>: `T` extends `object` ? keyof `T` : `string`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[api/types/index.ts:21](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L21)

---

### RelaxObject

Ƭ **RelaxObject**\<`T`, `K`\>: `T` extends `object` ? `T` : \{ [P in K]: T }

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | `T`                                             |
| `K`  | extends [`RelaxKey`](README.md#relaxkey)\<`T`\> |

#### Defined in

[api/types/index.ts:23](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L23)

---

### RelaxValue

Ƭ **RelaxValue**\<`T`, `K`\>: `T` extends `object` ? `K` extends keyof `T` ? `T`[`K`] : `never` : `T`

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | `T`                                             |
| `K`  | extends [`RelaxKey`](README.md#relaxkey)\<`T`\> |

#### Defined in

[api/types/index.ts:24](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L24)

---

### Response

Ƭ **Response**\<`T`, `CN`\>: `Promise`\<[`Data`](README.md#data)\<`T`, `CN`\>\>

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `T`  | `T`               |
| `CN` | extends `boolean` |

#### Defined in

[api/types/index.ts:67](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L67)

---

### SellInfoDto

Ƭ **SellInfoDto**: [`Numerify`](README.md#numerify)\<[`SellInfoRawDto`](interfaces/SellInfoRawDto.md)\>

#### Defined in

[api/types/trade-info.ts:44](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/trade-info.ts#L44)

---

### SellInfoStrDto

Ƭ **SellInfoStrDto**: [`Stringify`](README.md#stringify)\<[`SellInfoRawDto`](interfaces/SellInfoRawDto.md)\>

#### Defined in

[api/types/trade-info.ts:43](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/trade-info.ts#L43)

---

### Strategy

Ƭ **Strategy**: `"long"` \| `"short"`

#### Defined in

[api/types/index.ts:39](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L39)

---

### StrategyDetails

Ƭ **StrategyDetails**: \{ [K in keyof StrategyOptions]: StrategyDetailsBase & Object } & `Partial`\<`Record`\<`StrategyGeneric`[``"strategy"``], `StrategyDetailsBase`\>\>

#### Defined in

[api/types/strategy.ts:135](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/strategy.ts#L135)

---

### StrategyDto

Ƭ **StrategyDto**: [`Numerify`](README.md#numerify)\<[`StrategyRawDto`](README.md#strategyrawdto)\>

#### Defined in

[api/types/strategy.ts:163](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/strategy.ts#L163)

---

### StrategyRawDto

Ƭ **StrategyRawDto**: `Strategy`\<`"qfl"`\> \| `Strategy`\<`"tradingView"`\> \| `Strategy`\<`"ult"`\> \| `Strategy`\<`"bBandsPercent"`\> \| `Strategy`\<`"maCross"`\> \| `Strategy`\<`"adx"`\> \| `Strategy`\<`"stochastic"`\> \| `Strategy`\<`"macd"`\> \| `Strategy`\<`"parabolicSar"`\> \| `Strategy`\<`"rsi"`\> \| `Strategy`\<`"mfi"`\> \| `Strategy`\<`"cci"`\> \| `Strategy`\<`"heikinAshi"`\> \| `StrategyGeneric` \| `StrategyTAPreset`

#### Defined in

[api/types/strategy.ts:145](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/strategy.ts#L145)

---

### StrategyStrDto

Ƭ **StrategyStrDto**: [`Stringify`](README.md#stringify)\<[`StrategyRawDto`](README.md#strategyrawdto)\>

#### Defined in

[api/types/strategy.ts:162](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/strategy.ts#L162)

---

### Stringify

Ƭ **Stringify**\<`S`\>: `Convert`\<`S`, `string`\>

#### Type parameters

| Name |
| :--- |
| `S`  |

#### Defined in

[api/types/index.ts:55](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L55)

---

### TradeInfoDto

Ƭ **TradeInfoDto**: [`Numerify`](README.md#numerify)\<[`TradeInfoRawDto`](interfaces/TradeInfoRawDto.md)\>

#### Defined in

[api/types/trade-info.ts:41](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/trade-info.ts#L41)

---

### TradeInfoStrDto

Ƭ **TradeInfoStrDto**: [`Stringify`](README.md#stringify)\<[`TradeInfoRawDto`](interfaces/TradeInfoRawDto.md)\>

#### Defined in

[api/types/trade-info.ts:40](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/trade-info.ts#L40)

---

### UserBalanceChartDto

Ƭ **UserBalanceChartDto**: [`Numerify`](README.md#numerify)\<[`UserBalanaceChartRawDto`](interfaces/UserBalanaceChartRawDto.md)\>

#### Defined in

[api/types/user-balance.ts:47](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/user-balance.ts#L47)

---

### UserBalanceChartStrDto

Ƭ **UserBalanceChartStrDto**: [`Stringify`](README.md#stringify)\<[`UserBalanaceChartRawDto`](interfaces/UserBalanaceChartRawDto.md)\>

#### Defined in

[api/types/user-balance.ts:46](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/user-balance.ts#L46)

---

### VolumeType

Ƭ **VolumeType**: `"quote_currency"` \| `"base_currency"` \| `"percent"` \| `"xbt"`

#### Defined in

[api/types/index.ts:82](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/index.ts#L82)

## Functions

### cancelAllBotDeal

▸ **cancelAllBotDeal**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:142](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L142)

---

### copyBot

▸ **copyBot**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name             | Type                                  | Default value          |
| :--------------- | :------------------------------------ | :--------------------- |
| `params`         | `Object`                              | `undefined`            |
| `params.amount?` | `number`                              | `undefined`            |
| `params.id`      | `number`                              | `undefined`            |
| `params.name`    | `string`                              | `undefined`            |
| `params.secret`  | `string`                              | `undefined`            |
| `client`         | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:58](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L58)

---

### createAccount

▸ **createAccount**\<`CN`\>(`params?`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name      | Type                                                 | Default value          |
| :-------- | :--------------------------------------------------- | :--------------------- |
| `params?` | [`AccountCreateDto`](interfaces/AccountCreateDto.md) | `undefined`            |
| `client`  | [`Client`](classes/Client.md)\<`CN`\>                | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md), `CN`\>\>

#### Defined in

[api/account.ts:61](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L61)

---

### createBot

▸ **createBot**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                         | Default value          |
| :------- | :------------------------------------------- | :--------------------- |
| `params` | [`BotCreateDto`](interfaces/BotCreateDto.md) | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\>        | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:54](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L54)

---

### deleteAccount

▸ **deleteAccount**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<`boolean`, `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<`boolean`, `CN`\>\>

#### Defined in

[api/account.ts:69](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L69)

---

### deleteBot

▸ **deleteBot**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<`boolean`, `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<`boolean`, `CN`\>\>

#### Defined in

[api/bot.ts:69](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L69)

---

### getAccount

▸ **getAccount**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md), `CN`\>\>

#### Defined in

[api/account.ts:53](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L53)

---

### getAccountChart

▸ **getAccountChart**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`UserBalanaceChartRawDto`](interfaces/UserBalanaceChartRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`UserBalanaceChartRawDto`](interfaces/UserBalanaceChartRawDto.md), `CN`\>\>

#### Defined in

[api/account.ts:91](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L91)

---

### getAccountTable

▸ **getAccountTable**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`UserBalanceTableDto`](interfaces/UserBalanceTableDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`UserBalanceTableDto`](interfaces/UserBalanceTableDto.md), `CN`\>\>

#### Defined in

[api/account.ts:87](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L87)

---

### getAccounts

▸ **getAccounts**\<`CN`\>(`params?`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md)[], `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name      | Type                                                     | Default value          |
| :-------- | :------------------------------------------------------- | :--------------------- |
| `params?` | [`AccountQueryParams`](interfaces/AccountQueryParams.md) | `undefined`            |
| `client`  | [`Client`](classes/Client.md)\<`CN`\>                    | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md)[], `CN`\>\>

#### Defined in

[api/account.ts:49](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L49)

---

### getActiveTradingEntities

▸ **getActiveTradingEntities**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<`string`[], `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<`string`[], `CN`\>\>

#### Defined in

[api/account.ts:95](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L95)

---

### getAll

▸ **getAll**\<`T`, `CN`\>(`pageSize`, `parallel`, `fetcher`, `client`, `params?`, `maxPage?`): [`Response`](README.md#response)\<`T`, `CN`\>

Executes parallel requests in batches to fetch all items such as `accounts` or `bots`.

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `T`  | `T`               |
| `CN` | extends `boolean` |

#### Parameters

| Name       | Type                                  | Default value | Description                                                                                                                                |
| :--------- | :------------------------------------ | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `pageSize` | `number`                              | `undefined`   | is the maximum record number allowed in one request by 3Commas API. (`limit` or `per_page`)                                                |
| `parallel` | `number`                              | `undefined`   | is the number of parallel requests in a single batch.                                                                                      |
| `fetcher`  | `Fetcher`\<`T`, `CN`\>                | `undefined`   | is the normal function to fetch records (The function to fetch in a single request). This function is executed multiple times in parallel. |
| `client`   | [`Client`](classes/Client.md)\<`CN`\> | `undefined`   | is the client to be used to fetch records.                                                                                                 |
| `params?`  | `object`                              | `undefined`   | are the parameters for the API endpoint.                                                                                                   |
| `maxPage`  | `number`                              | `10`          | is the maximum number of pages to retrieve. If this value is too high, server may blacklist the client.                                    |

#### Returns

[`Response`](README.md#response)\<`T`, `CN`\>

the records.

**`Throws`**

`AggregateError` if one or more requests fails.

#### Defined in

[api/utils/parallel.ts:72](https://github.com/ozum/3commas/blob/d6773ef/src/api/utils/parallel.ts#L72)

---

### getAllAccounts

▸ **getAllAccounts**\<`CN`\>(`params?`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md)[], `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name      | Type                                                     | Default value          |
| :-------- | :------------------------------------------------------- | :--------------------- |
| `params?` | [`AccountQueryParams`](interfaces/AccountQueryParams.md) | `undefined`            |
| `client`  | [`Client`](classes/Client.md)\<`CN`\>                    | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md)[], `CN`\>\>

#### Defined in

[api/account.ts:45](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L45)

---

### getAllBots

▸ **getAllBots**\<`CN`\>(`params?`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md)[], `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name      | Type                                             | Default value          |
| :-------- | :----------------------------------------------- | :--------------------- |
| `params?` | [`BotQueryParams`](interfaces/BotQueryParams.md) | `undefined`            |
| `client`  | [`Client`](classes/Client.md)\<`CN`\>            | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md)[], `CN`\>\>

#### Defined in

[api/bot.ts:38](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L38)

---

### getBot

▸ **getBot**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                                                                              | Default value          |
| :------- | :------------------------------------------------------------------------------------------------ | :--------------------- |
| `params` | [`RelaxInput`](README.md#relaxinput)\<\{ `id`: `number` ; `includeEvents?`: `boolean` }, `"id"`\> | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\>                                                             | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:46](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L46)

---

### getBotDealsStats

▸ **getBotDealsStats**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotStatsRawDto`](interfaces/BotStatsRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotStatsRawDto`](interfaces/BotStatsRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:146](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L146)

---

### getBotStats

▸ **getBotStats**\<`CN`\>(`params?`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotStatsRawDto`](interfaces/BotStatsRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                                                                                              | Default value          |
| :------- | :---------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `params` | [`RelaxInput`](README.md#relaxinput)\<\{ `accountId?`: `number` ; `date?`: `string` ; `id?`: `number` }, `"id"`\> | `{}`                   |
| `client` | [`Client`](classes/Client.md)\<`CN`\>                                                                             | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotStatsRawDto`](interfaces/BotStatsRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:100](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L100)

---

### getBots

▸ **getBots**\<`CN`\>(`params?`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md)[], `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name      | Type                                             | Default value          |
| :-------- | :----------------------------------------------- | :--------------------- |
| `params?` | [`BotQueryParams`](interfaces/BotQueryParams.md) | `undefined`            |
| `client`  | [`Client`](classes/Client.md)\<`CN`\>            | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md)[], `CN`\>\>

#### Defined in

[api/bot.ts:42](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L42)

---

### getMarketList

▸ **getMarketList**\<`CN`\>(`client?`): `Promise`\<[`Data`](README.md#data)\<[`MarketDto`](interfaces/MarketDto.md)[], `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`MarketDto`](interfaces/MarketDto.md)[], `CN`\>\>

#### Defined in

[api/account.ts:57](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L57)

---

### getMarketPairs

▸ **getMarketPairs**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<`string`[], `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                                                                                            | Default value          |
| :------- | :-------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `params` | [`RelaxInput`](README.md#relaxinput)\<\{ `marketCode`: [`MarketCode`](README.md#marketcode) }, `"marketCode"`\> | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\>                                                                           | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<`string`[], `CN`\>\>

#### Defined in

[api/account.ts:80](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L80)

---

### getMarketTypes

▸ **getMarketTypes**(`params`, `client?`): `Promise`\<`Convert`\<`unknown`, `number`\>\>

#### Parameters

| Name              | Type                                    | Default value          |
| :---------------- | :-------------------------------------- | :--------------------- |
| `params`          | `Object`                                | `undefined`            |
| `params.api_key?` | `string`                                | `undefined`            |
| `params.name`     | `string`                                | `undefined`            |
| `params.secret?`  | `string`                                | `undefined`            |
| `params.type`     | [`MarketCode`](README.md#marketcode)    | `undefined`            |
| `client`          | [`Client`](classes/Client.md)\<`true`\> | `Client.defaultClient` |

#### Returns

`Promise`\<`Convert`\<`unknown`, `number`\>\>

#### Defined in

[api/account.ts:38](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L38)

---

### getPairsBlackList

▸ **getPairsBlackList**\<`CN`\>(`client?`): `Promise`\<[`Data`](README.md#data)\<\{ `pairs`: `string`[] }, `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<\{ `pairs`: `string`[] }, `CN`\>\>

#### Defined in

[api/bot.ts:96](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L96)

---

### getProfitByDay

▸ **getProfitByDay**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`ProfitRawDto`](interfaces/ProfitRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                                                                    | Default value          |
| :------- | :-------------------------------------------------------------------------------------- | :--------------------- |
| `params` | [`RelaxInput`](README.md#relaxinput)\<\{ `days?`: `number` ; `id`: `number` }, `"id"`\> | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\>                                                   | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`ProfitRawDto`](interfaces/ProfitRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:109](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L109)

---

### getSellInfo

▸ **getSellInfo**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`SellInfoRawDto`](interfaces/SellInfoRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `AccountId`                           | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`SellInfoRawDto`](interfaces/SellInfoRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:88](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L88)

---

### getStrategyList

▸ **getStrategyList**\<`CN`\>(`params?`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`StrategyDetails`](README.md#strategydetails), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name                | Type                                  | Default value          |
| :------------------ | :------------------------------------ | :--------------------- |
| `params?`           | `Object`                              | `undefined`            |
| `params.accountId?` | `number`                              | `undefined`            |
| `params.strategy?`  | [`Strategy`](README.md#strategy)      | `undefined`            |
| `params.type?`      | `"simple"` \| `"composite"`           | `undefined`            |
| `client`            | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`StrategyDetails`](README.md#strategydetails), `CN`\>\>

#### Defined in

[api/bot.ts:81](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L81)

---

### getTradeInfo

▸ **getTradeInfo**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`TradeInfoRawDto`](interfaces/TradeInfoRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `AccountId`                           | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`TradeInfoRawDto`](interfaces/TradeInfoRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:92](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L92)

---

### parallelSettled

▸ **parallelSettled**\<`T`\>(`jobs`, `«destructured»?`): `Promise`\<`T`\>

Executes given async functions in parallel batches. For example 6 functions can be run in 2 batches of 3 parallel jobs.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                 | Type                     | Description                   |
| :------------------- | :----------------------- | :---------------------------- |
| `jobs`               | () => `Promise`\<`T`\>[] | are the functions to execute. |
| `«destructured»`     | `Object`                 | -                             |
| › `finishIfLessThan` | `undefined` \| `number`  | -                             |
| › `parallel`         | `undefined` \| `number`  | -                             |

#### Returns

`Promise`\<`T`\>

results off all jobs as an array.

**`Throws`**

`AggregateError` if one or more jobs fails after all jobs are finished. (Similar to `Promise.allSettled()`).

#### Defined in

[api/utils/parallel.ts:98](https://github.com/ozum/3commas/blob/d6773ef/src/api/utils/parallel.ts#L98)

---

### renameAccount

▸ **renameAccount**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name          | Type                                  | Default value          |
| :------------ | :------------------------------------ | :--------------------- |
| `params`      | `Object`                              | `undefined`            |
| `params.id`   | `number`                              | `undefined`            |
| `params.name` | `string`                              | `undefined`            |
| `client`      | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md), `CN`\>\>

#### Defined in

[api/account.ts:73](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L73)

---

### sellAllBotDeals

▸ **sellAllBotDeals**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:138](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L138)

---

### startBot

▸ **startBot**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:73](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L73)

---

### startNewDeal

▸ **startNewDeal**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`DealRawDto`](interfaces/DealRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                                                                                                                                                                        | Default value          |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------- |
| `params` | [`RelaxInput`](README.md#relaxinput)\<\{ `id`: `number` ; `onlyForEnabled?`: `boolean` ; `pair?`: `string` ; `skipOpenDealsChecks?`: `boolean` ; `skipSignalChecks?`: `boolean` }, `"id"`\> | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\>                                                                                                                                                       | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`DealRawDto`](interfaces/DealRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:117](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L117)

---

### stopBot

▸ **stopBot**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                  | Default value          |
| :------- | :------------------------------------ | :--------------------- |
| `params` | `Id`                                  | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\> | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:77](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L77)

---

### transfer

▸ **transfer**(`params`, `client?`): `Promise`\<`object`\>

Transfers coins between accounts.

#### Parameters

| Name                   | Type                                    | Default value          | Description    |
| :--------------------- | :-------------------------------------- | :--------------------- | :------------- |
| `params`               | `Object`                                | `undefined`            | -              |
| `params.amount`        | `number`                                | `undefined`            | -              |
| `params.currency`      | `string`                                | `undefined`            | -              |
| `params.fromAccountId` | `number`                                | `undefined`            | -              |
| `params.toAccountId`   | `number`                                | `undefined`            | -              |
| `client`               | [`Client`](classes/Client.md)\<`true`\> | `Client.defaultClient` | is the client. |

#### Returns

`Promise`\<`object`\>

#### Defined in

[api/account.ts:31](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L31)

---

### updateAccount

▸ **updateAccount**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                                 | Default value          |
| :------- | :--------------------------------------------------- | :--------------------- |
| `params` | [`AccountUpdateDto`](interfaces/AccountUpdateDto.md) | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\>                | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`AccountRawDto`](interfaces/AccountRawDto.md), `CN`\>\>

#### Defined in

[api/account.ts:65](https://github.com/ozum/3commas/blob/d6773ef/src/api/account.ts#L65)

---

### updateBot

▸ **updateBot**\<`CN`\>(`params`, `client?`): `Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `CN` | extends `boolean` = `true` |

#### Parameters

| Name     | Type                                         | Default value          |
| :------- | :------------------------------------------- | :--------------------- |
| `params` | [`BotUpdateDto`](interfaces/BotUpdateDto.md) | `undefined`            |
| `client` | [`Client`](classes/Client.md)\<`CN`\>        | `Client.defaultClient` |

#### Returns

`Promise`\<[`Data`](README.md#data)\<[`BotRawDto`](interfaces/BotRawDto.md), `CN`\>\>

#### Defined in

[api/bot.ts:65](https://github.com/ozum/3commas/blob/d6773ef/src/api/bot.ts#L65)

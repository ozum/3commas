[3commas](../README.md) / Account

# Class: Account

## Table of contents

### Constructors

- [constructor](Account.md#constructor)

### Properties

- [#data](Account.md##data)
- [#dirtyChecker](Account.md##dirtychecker)
- [#root](Account.md##root)

### Accessors

- [#client](Account.md##client)
- [address](Account.md#address)
- [apiKey](Account.md#apikey)
- [apiKeyInvalid](Account.md#apikeyinvalid)
- [autoBalanceCurrencyChangeLimit](Account.md#autobalancecurrencychangelimit)
- [autoBalanceError](Account.md#autobalanceerror)
- [autoBalanceMethod](Account.md#autobalancemethod)
- [autoBalancePeriod](Account.md#autobalanceperiod)
- [autoBalancePortfolioId](Account.md#autobalanceportfolioid)
- [autobalanceEnabled](Account.md#autobalanceenabled)
- [availableForTrading](Account.md#availablefortrading)
- [availableIncludeInSummary](Account.md#availableincludeinsummary)
- [bots](Account.md#bots)
- [botsAllowed](Account.md#botsallowed)
- [botsTslAllowed](Account.md#botstslallowed)
- [botsTtpAllowed](Account.md#botsttpallowed)
- [btcAmount](Account.md#btcamount)
- [btcProfit](Account.md#btcprofit)
- [btcProfitPercentage](Account.md#btcprofitpercentage)
- [canShort](Account.md#canshort)
- [conditionalBuySupported](Account.md#conditionalbuysupported)
- [createdAt](Account.md#createdat)
- [customerId](Account.md#customerid)
- [dayProfitBtc](Account.md#dayprofitbtc)
- [dayProfitBtcPercentage](Account.md#dayprofitbtcpercentage)
- [dayProfitPrimaryDisplayCurrency](Account.md#dayprofitprimarydisplaycurrency)
- [dayProfitPrimaryDisplayCurrencyPercentage](Account.md#dayprofitprimarydisplaycurrencypercentage)
- [dayProfitUsd](Account.md#dayprofitusd)
- [dayProfitUsdPercentage](Account.md#dayprofitusdpercentage)
- [depositEnabled](Account.md#depositenabled)
- [exchangeName](Account.md#exchangename)
- [fastConvertAvailable](Account.md#fastconvertavailable)
- [getPairs](Account.md#getpairs)
- [getStringPairs](Account.md#getstringpairs)
- [gordonBotsAvailable](Account.md#gordonbotsavailable)
- [gridBotsAllowed](Account.md#gridbotsallowed)
- [hedgeModeAvailable](Account.md#hedgemodeavailable)
- [hedgeModeEnabled](Account.md#hedgemodeenabled)
- [id](Account.md#id)
- [includeInSummary](Account.md#includeinsummary)
- [isLocked](Account.md#islocked)
- [lastAutoBalance](Account.md#lastautobalance)
- [lockReason](Account.md#lockreason)
- [marketBuySupported](Account.md#marketbuysupported)
- [marketCode](Account.md#marketcode)
- [marketIcon](Account.md#marketicon)
- [marketSellSupported](Account.md#marketsellsupported)
- [multiBotsAllowed](Account.md#multibotsallowed)
- [name](Account.md#name)
- [passphrase](Account.md#passphrase)
- [prettyDisplayType](Account.md#prettydisplaytype)
- [primaryDisplayCurrencyAmount](Account.md#primarydisplaycurrencyamount)
- [primaryDisplayCurrencyProfit](Account.md#primarydisplaycurrencyprofit)
- [primaryDisplayCurrencyProfitPercentage](Account.md#primarydisplaycurrencyprofitpercentage)
- [secret](Account.md#secret)
- [smartTradingSupported](Account.md#smarttradingsupported)
- [statsSupported](Account.md#statssupported)
- [subaccountName](Account.md#subaccountname)
- [supportedMarketTypes](Account.md#supportedmarkettypes)
- [totalBtcProfit](Account.md#totalbtcprofit)
- [totalPrimaryDisplayCurrencyProfit](Account.md#totalprimarydisplaycurrencyprofit)
- [totalUsdProfit](Account.md#totalusdprofit)
- [tradingSupported](Account.md#tradingsupported)
- [updatedAt](Account.md#updatedat)
- [usdAmount](Account.md#usdamount)
- [usdProfit](Account.md#usdprofit)
- [usdProfitPercentage](Account.md#usdprofitpercentage)

### Methods

- [#replaceData](Account.md##replacedata)
- [delete](Account.md#delete)
- [hasPair](Account.md#haspair)
- [save](Account.md#save)
- [toPairArray](Account.md#topairarray)
- [toPairObject](Account.md#topairobject)
- [toPairString](Account.md#topairstring)

## Constructors

### constructor

• **new Account**(`root`, `data`): [`Account`](Account.md)

#### Parameters

| Name   | Type                                                                     |
| :----- | :----------------------------------------------------------------------- |
| `root` | [`ThreeCommas`](ThreeCommas.md)                                          |
| `data` | `Convert`\<[`AccountRawDto`](../interfaces/AccountRawDto.md), `number`\> |

#### Returns

[`Account`](Account.md)

#### Defined in

account.ts:13

## Properties

### #data

• `Private` **#data**: `Convert`\<[`AccountRawDto`](../interfaces/AccountRawDto.md), `number`\>

#### Defined in

account.ts:10

---

### #dirtyChecker

• `Private` **#dirtyChecker**: `DirtyChecker`\<`Convert`\<[`AccountRawDto`](../interfaces/AccountRawDto.md), `number`\>\>

#### Defined in

account.ts:11

---

### #root

• `Private` `Readonly` **#root**: [`ThreeCommas`](ThreeCommas.md)

#### Defined in

account.ts:9

## Accessors

### #client

• `get` **#client**(): [`Client`](Client.md)\<`true`\>

#### Returns

[`Client`](Client.md)\<`true`\>

#### Defined in

account.ts:36

---

### address

• `get` **address**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

account.ts:93

• `set` **address**(`address`): `void`

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `address` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

account.ts:97

---

### apiKey

• `get` **apiKey**(): `string`

#### Returns

`string`

#### Defined in

account.ts:249

• `set` **apiKey**(`apiKey`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `apiKey` | `string` |

#### Returns

`void`

#### Defined in

account.ts:253

---

### apiKeyInvalid

• `get` **apiKeyInvalid**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:197

---

### autoBalanceCurrencyChangeLimit

• `get` **autoBalanceCurrencyChangeLimit**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

account.ts:109

---

### autoBalanceError

• `get` **autoBalanceError**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Defined in

account.ts:269

---

### autoBalanceMethod

• `get` **autoBalanceMethod**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Defined in

account.ts:265

---

### autoBalancePeriod

• `get` **autoBalancePeriod**(): `number`

#### Returns

`number`

#### Defined in

account.ts:101

---

### autoBalancePortfolioId

• `get` **autoBalancePortfolioId**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

account.ts:105

---

### autobalanceEnabled

• `get` **autobalanceEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:113

---

### availableForTrading

• `get` **availableForTrading**(): `object`

#### Returns

`object`

#### Defined in

account.ts:133

---

### availableIncludeInSummary

• `get` **availableIncludeInSummary**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:245

---

### bots

• `get` **bots**(): [`Bot`](Bot.md)[]

#### Returns

[`Bot`](Bot.md)[]

#### Defined in

account.ts:40

---

### botsAllowed

• `get` **botsAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:157

---

### botsTslAllowed

• `get` **botsTslAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:165

---

### botsTtpAllowed

• `get` **botsTtpAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:161

---

### btcAmount

• `get` **btcAmount**(): `number`

#### Returns

`number`

#### Defined in

account.ts:293

---

### btcProfit

• `get` **btcProfit**(): `number`

#### Returns

`number`

#### Defined in

account.ts:317

---

### btcProfitPercentage

• `get` **btcProfitPercentage**(): `number`

#### Returns

`number`

#### Defined in

account.ts:329

---

### canShort

• `get` **canShort**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:44

---

### conditionalBuySupported

• `get` **conditionalBuySupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:153

---

### createdAt

• `get` **createdAt**(): `string`

#### Returns

`string`

#### Defined in

account.ts:177

---

### customerId

• `get` **customerId**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Defined in

account.ts:273

• `set` **customerId**(`customerId`): `void`

#### Parameters

| Name         | Type               |
| :----------- | :----------------- |
| `customerId` | `null` \| `string` |

#### Returns

`void`

#### Defined in

account.ts:277

---

### dayProfitBtc

• `get` **dayProfitBtc**(): `number`

#### Returns

`number`

#### Defined in

account.ts:301

---

### dayProfitBtcPercentage

• `get` **dayProfitBtcPercentage**(): `number`

#### Returns

`number`

#### Defined in

account.ts:309

---

### dayProfitPrimaryDisplayCurrency

• `get` **dayProfitPrimaryDisplayCurrency**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

account.ts:233

---

### dayProfitPrimaryDisplayCurrencyPercentage

• `get` **dayProfitPrimaryDisplayCurrencyPercentage**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

account.ts:229

---

### dayProfitUsd

• `get` **dayProfitUsd**(): `number`

#### Returns

`number`

#### Defined in

account.ts:305

---

### dayProfitUsdPercentage

• `get` **dayProfitUsdPercentage**(): `number`

#### Returns

`number`

#### Defined in

account.ts:313

---

### depositEnabled

• `get` **depositEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:205

---

### exchangeName

• `get` **exchangeName**(): `string`

#### Returns

`string`

#### Defined in

account.ts:345

---

### fastConvertAvailable

• `get` **fastConvertAvailable**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:189

---

### getPairs

• `get` **getPairs**(): [`PairObject`](../interfaces/PairObject.md)[]

All available pairs for the account as objects. i.e. `[{ base: "BTC", quote: "USDT" }, ...]`

#### Returns

[`PairObject`](../interfaces/PairObject.md)[]

#### Defined in

account.ts:66

---

### getStringPairs

• `get` **getStringPairs**(): `string`[]

All available pairs for the account as strings. i.e. `['USDT_BTCUSDT', ...]`

#### Returns

`string`[]

#### Defined in

account.ts:61

---

### gordonBotsAvailable

• `get` **gordonBotsAvailable**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:169

---

### gridBotsAllowed

• `get` **gridBotsAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:193

---

### hedgeModeAvailable

• `get` **hedgeModeAvailable**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:117

---

### hedgeModeEnabled

• `get` **hedgeModeEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:121

---

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

account.ts:89

---

### includeInSummary

• `get` **includeInSummary**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:209

• `set` **includeInSummary**(`includeInSummary`): `void`

#### Parameters

| Name               | Type      |
| :----------------- | :-------- |
| `includeInSummary` | `boolean` |

#### Returns

`void`

#### Defined in

account.ts:213

---

### isLocked

• `get` **isLocked**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:125

---

### lastAutoBalance

• `get` **lastAutoBalance**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

account.ts:185

---

### lockReason

• `get` **lockReason**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Defined in

account.ts:289

---

### marketBuySupported

• `get` **marketBuySupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:145

---

### marketCode

• `get` **marketCode**(): [`MarketCode`](../README.md#marketcode)

#### Returns

[`MarketCode`](../README.md#marketcode)

#### Defined in

account.ts:349

• `set` **marketCode**(`marketCode`): `void`

#### Parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `marketCode` | [`MarketCode`](../README.md#marketcode) |

#### Returns

`void`

#### Defined in

account.ts:353

---

### marketIcon

• `get` **marketIcon**(): `string`

#### Returns

`string`

#### Defined in

account.ts:201

---

### marketSellSupported

• `get` **marketSellSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:149

---

### multiBotsAllowed

• `get` **multiBotsAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:173

---

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

account.ts:257

• `set` **name**(`name`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`void`

#### Defined in

account.ts:261

---

### passphrase

• `set` **passphrase**(`passphrase`): `void`

#### Parameters

| Name         | Type                    |
| :----------- | :---------------------- |
| `passphrase` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

account.ts:85

---

### prettyDisplayType

• `get` **prettyDisplayType**(): `string`

#### Returns

`string`

#### Defined in

account.ts:341

---

### primaryDisplayCurrencyAmount

• `get` **primaryDisplayCurrencyAmount**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

account.ts:237

---

### primaryDisplayCurrencyProfit

• `get` **primaryDisplayCurrencyProfit**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

account.ts:225

---

### primaryDisplayCurrencyProfitPercentage

• `get` **primaryDisplayCurrencyProfitPercentage**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

account.ts:221

---

### secret

• `set` **secret**(`secret`): `void`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `secret` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

account.ts:81

---

### smartTradingSupported

• `get` **smartTradingSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:129

---

### statsSupported

• `get` **statsSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:137

---

### subaccountName

• `get` **subaccountName**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Defined in

account.ts:281

• `set` **subaccountName**(`subaccountName`): `void`

#### Parameters

| Name             | Type               |
| :--------------- | :----------------- |
| `subaccountName` | `null` \| `string` |

#### Returns

`void`

#### Defined in

account.ts:285

---

### supportedMarketTypes

• `get` **supportedMarketTypes**(): (`"spot"` \| `"futures"`)[]

#### Returns

(`"spot"` \| `"futures"`)[]

#### Defined in

account.ts:217

---

### totalBtcProfit

• `get` **totalBtcProfit**(): `number`

#### Returns

`number`

#### Defined in

account.ts:333

---

### totalPrimaryDisplayCurrencyProfit

• `get` **totalPrimaryDisplayCurrencyProfit**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

account.ts:241

---

### totalUsdProfit

• `get` **totalUsdProfit**(): `number`

#### Returns

`number`

#### Defined in

account.ts:337

---

### tradingSupported

• `get` **tradingSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

account.ts:141

---

### updatedAt

• `get` **updatedAt**(): `string`

#### Returns

`string`

#### Defined in

account.ts:181

---

### usdAmount

• `get` **usdAmount**(): `number`

#### Returns

`number`

#### Defined in

account.ts:297

---

### usdProfit

• `get` **usdProfit**(): `number`

#### Returns

`number`

#### Defined in

account.ts:321

---

### usdProfitPercentage

• `get` **usdProfitPercentage**(): `number`

#### Returns

`number`

#### Defined in

account.ts:325

## Methods

### #replaceData

▸ **#replaceData**(`data`): [`Account`](Account.md)

#### Parameters

| Name   | Type                                                                     |
| :----- | :----------------------------------------------------------------------- |
| `data` | `Convert`\<[`AccountRawDto`](../interfaces/AccountRawDto.md), `number`\> |

#### Returns

[`Account`](Account.md)

#### Defined in

account.ts:19

---

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

account.ts:32

---

### hasPair

▸ **hasPair**(`pair`): `boolean`

Checks if given pair is available for this market..

#### Parameters

| Name   | Type                        | Description           |
| :----- | :-------------------------- | :-------------------- |
| `pair` | [`Pair`](../README.md#pair) | is the pair to check. |

#### Returns

`boolean`

true if pair is available for the given market.

**`Throws`**

error if no pairs are loaded for the given market code.

#### Defined in

account.ts:77

---

### save

▸ **save**(`params?`): `Promise`\<[`Account`](Account.md)\>

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `params`             | `Object` |
| `params.passphrase?` | `string` |
| `params.secret?`     | `string` |

#### Returns

`Promise`\<[`Account`](Account.md)\>

#### Defined in

account.ts:26

---

### toPairArray

▸ **toPairArray**(`pair`): [`PairArray`](../README.md#pairarray)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `pair` | [`Pair`](../README.md#pair) |

#### Returns

[`PairArray`](../README.md#pairarray)

#### Defined in

account.ts:56

---

### toPairObject

▸ **toPairObject**(`pair`): [`PairObject`](../interfaces/PairObject.md)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `pair` | [`Pair`](../README.md#pair) |

#### Returns

[`PairObject`](../interfaces/PairObject.md)

#### Defined in

account.ts:52

---

### toPairString

▸ **toPairString**(`pair`): `string`

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `pair` | [`Pair`](../README.md#pair) |

#### Returns

`string`

#### Defined in

account.ts:48

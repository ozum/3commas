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

| Name | Type |
| :------ | :------ |
| `root` | [`ThreeCommas`](ThreeCommas.md) |
| `data` | `Convert`\<[`AccountRawDto`](../interfaces/AccountRawDto.md), `number`\> |

#### Returns

[`Account`](Account.md)

#### Defined in

[account.ts:13](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L13)

## Properties

### #data

• `Private` **#data**: `Convert`\<[`AccountRawDto`](../interfaces/AccountRawDto.md), `number`\>

#### Defined in

[account.ts:10](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L10)

___

### #dirtyChecker

• `Private` **#dirtyChecker**: `DirtyChecker`\<`Convert`\<[`AccountRawDto`](../interfaces/AccountRawDto.md), `number`\>\>

#### Defined in

[account.ts:11](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L11)

___

### #root

• `Private` `Readonly` **#root**: [`ThreeCommas`](ThreeCommas.md)

#### Defined in

[account.ts:9](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L9)

## Accessors

### #client

• `get` **#client**(): [`Client`](Client.md)\<``true``\>

#### Returns

[`Client`](Client.md)\<``true``\>

#### Defined in

[account.ts:36](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L36)

___

### address

• `get` **address**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[account.ts:93](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L93)

• `set` **address**(`address`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[account.ts:97](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L97)

___

### apiKey

• `get` **apiKey**(): `string`

#### Returns

`string`

#### Defined in

[account.ts:249](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L249)

• `set` **apiKey**(`apiKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |

#### Returns

`void`

#### Defined in

[account.ts:253](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L253)

___

### apiKeyInvalid

• `get` **apiKeyInvalid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:197](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L197)

___

### autoBalanceCurrencyChangeLimit

• `get` **autoBalanceCurrencyChangeLimit**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[account.ts:109](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L109)

___

### autoBalanceError

• `get` **autoBalanceError**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[account.ts:269](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L269)

___

### autoBalanceMethod

• `get` **autoBalanceMethod**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[account.ts:265](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L265)

___

### autoBalancePeriod

• `get` **autoBalancePeriod**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:101](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L101)

___

### autoBalancePortfolioId

• `get` **autoBalancePortfolioId**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[account.ts:105](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L105)

___

### autobalanceEnabled

• `get` **autobalanceEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:113](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L113)

___

### availableForTrading

• `get` **availableForTrading**(): `object`

#### Returns

`object`

#### Defined in

[account.ts:133](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L133)

___

### availableIncludeInSummary

• `get` **availableIncludeInSummary**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:245](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L245)

___

### bots

• `get` **bots**(): [`Bot`](Bot.md)[]

#### Returns

[`Bot`](Bot.md)[]

#### Defined in

[account.ts:40](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L40)

___

### botsAllowed

• `get` **botsAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:157](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L157)

___

### botsTslAllowed

• `get` **botsTslAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:165](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L165)

___

### botsTtpAllowed

• `get` **botsTtpAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:161](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L161)

___

### btcAmount

• `get` **btcAmount**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:293](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L293)

___

### btcProfit

• `get` **btcProfit**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:317](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L317)

___

### btcProfitPercentage

• `get` **btcProfitPercentage**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:329](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L329)

___

### canShort

• `get` **canShort**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:44](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L44)

___

### conditionalBuySupported

• `get` **conditionalBuySupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:153](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L153)

___

### createdAt

• `get` **createdAt**(): `string`

#### Returns

`string`

#### Defined in

[account.ts:177](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L177)

___

### customerId

• `get` **customerId**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[account.ts:273](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L273)

• `set` **customerId**(`customerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `customerId` | ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[account.ts:277](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L277)

___

### dayProfitBtc

• `get` **dayProfitBtc**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:301](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L301)

___

### dayProfitBtcPercentage

• `get` **dayProfitBtcPercentage**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:309](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L309)

___

### dayProfitPrimaryDisplayCurrency

• `get` **dayProfitPrimaryDisplayCurrency**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

[account.ts:233](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L233)

___

### dayProfitPrimaryDisplayCurrencyPercentage

• `get` **dayProfitPrimaryDisplayCurrencyPercentage**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

[account.ts:229](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L229)

___

### dayProfitUsd

• `get` **dayProfitUsd**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:305](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L305)

___

### dayProfitUsdPercentage

• `get` **dayProfitUsdPercentage**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:313](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L313)

___

### depositEnabled

• `get` **depositEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:205](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L205)

___

### exchangeName

• `get` **exchangeName**(): `string`

#### Returns

`string`

#### Defined in

[account.ts:345](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L345)

___

### fastConvertAvailable

• `get` **fastConvertAvailable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:189](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L189)

___

### getPairs

• `get` **getPairs**(): [`PairObject`](../interfaces/PairObject.md)[]

All available pairs for the account as objects. i.e. `[{ base: "BTC", quote: "USDT" }, ...]`

#### Returns

[`PairObject`](../interfaces/PairObject.md)[]

#### Defined in

[account.ts:66](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L66)

___

### getStringPairs

• `get` **getStringPairs**(): `string`[]

All available pairs for the account as strings. i.e. `['USDT_BTCUSDT', ...]`

#### Returns

`string`[]

#### Defined in

[account.ts:61](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L61)

___

### gordonBotsAvailable

• `get` **gordonBotsAvailable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:169](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L169)

___

### gridBotsAllowed

• `get` **gridBotsAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:193](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L193)

___

### hedgeModeAvailable

• `get` **hedgeModeAvailable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:117](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L117)

___

### hedgeModeEnabled

• `get` **hedgeModeEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:121](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L121)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:89](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L89)

___

### includeInSummary

• `get` **includeInSummary**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:209](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L209)

• `set` **includeInSummary**(`includeInSummary`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `includeInSummary` | `boolean` |

#### Returns

`void`

#### Defined in

[account.ts:213](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L213)

___

### isLocked

• `get` **isLocked**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:125](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L125)

___

### lastAutoBalance

• `get` **lastAutoBalance**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[account.ts:185](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L185)

___

### lockReason

• `get` **lockReason**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[account.ts:289](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L289)

___

### marketBuySupported

• `get` **marketBuySupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:145](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L145)

___

### marketCode

• `get` **marketCode**(): [`MarketCode`](../README.md#marketcode)

#### Returns

[`MarketCode`](../README.md#marketcode)

#### Defined in

[account.ts:349](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L349)

• `set` **marketCode**(`marketCode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketCode` | [`MarketCode`](../README.md#marketcode) |

#### Returns

`void`

#### Defined in

[account.ts:353](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L353)

___

### marketIcon

• `get` **marketIcon**(): `string`

#### Returns

`string`

#### Defined in

[account.ts:201](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L201)

___

### marketSellSupported

• `get` **marketSellSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:149](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L149)

___

### multiBotsAllowed

• `get` **multiBotsAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:173](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L173)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[account.ts:257](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L257)

• `set` **name**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[account.ts:261](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L261)

___

### passphrase

• `set` **passphrase**(`passphrase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passphrase` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[account.ts:85](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L85)

___

### prettyDisplayType

• `get` **prettyDisplayType**(): `string`

#### Returns

`string`

#### Defined in

[account.ts:341](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L341)

___

### primaryDisplayCurrencyAmount

• `get` **primaryDisplayCurrencyAmount**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

[account.ts:237](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L237)

___

### primaryDisplayCurrencyProfit

• `get` **primaryDisplayCurrencyProfit**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

[account.ts:225](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L225)

___

### primaryDisplayCurrencyProfitPercentage

• `get` **primaryDisplayCurrencyProfitPercentage**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

[account.ts:221](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L221)

___

### secret

• `set` **secret**(`secret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[account.ts:81](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L81)

___

### smartTradingSupported

• `get` **smartTradingSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:129](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L129)

___

### statsSupported

• `get` **statsSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:137](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L137)

___

### subaccountName

• `get` **subaccountName**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[account.ts:281](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L281)

• `set` **subaccountName**(`subaccountName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subaccountName` | ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[account.ts:285](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L285)

___

### supportedMarketTypes

• `get` **supportedMarketTypes**(): (``"spot"`` \| ``"futures"``)[]

#### Returns

(``"spot"`` \| ``"futures"``)[]

#### Defined in

[account.ts:217](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L217)

___

### totalBtcProfit

• `get` **totalBtcProfit**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:333](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L333)

___

### totalPrimaryDisplayCurrencyProfit

• `get` **totalPrimaryDisplayCurrencyProfit**(): `Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Returns

`Convert`\<[`CurrencyAmount`](../interfaces/CurrencyAmount.md), `number`\>

#### Defined in

[account.ts:241](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L241)

___

### totalUsdProfit

• `get` **totalUsdProfit**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:337](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L337)

___

### tradingSupported

• `get` **tradingSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

[account.ts:141](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L141)

___

### updatedAt

• `get` **updatedAt**(): `string`

#### Returns

`string`

#### Defined in

[account.ts:181](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L181)

___

### usdAmount

• `get` **usdAmount**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:297](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L297)

___

### usdProfit

• `get` **usdProfit**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:321](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L321)

___

### usdProfitPercentage

• `get` **usdProfitPercentage**(): `number`

#### Returns

`number`

#### Defined in

[account.ts:325](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L325)

## Methods

### #replaceData

▸ **#replaceData**(`data`): [`Account`](Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Convert`\<[`AccountRawDto`](../interfaces/AccountRawDto.md), `number`\> |

#### Returns

[`Account`](Account.md)

#### Defined in

[account.ts:19](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L19)

___

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[account.ts:32](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L32)

___

### hasPair

▸ **hasPair**(`pair`): `boolean`

Checks if given pair is available for this market..

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pair` | [`Pair`](../README.md#pair) | is the pair to check. |

#### Returns

`boolean`

true if pair is available for the given market.

**`Throws`**

error if no pairs are loaded for the given market code.

#### Defined in

[account.ts:77](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L77)

___

### save

▸ **save**(`params?`): `Promise`\<[`Account`](Account.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.passphrase?` | `string` |
| `params.secret?` | `string` |

#### Returns

`Promise`\<[`Account`](Account.md)\>

#### Defined in

[account.ts:26](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L26)

___

### toPairArray

▸ **toPairArray**(`pair`): [`PairArray`](../README.md#pairarray)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`Pair`](../README.md#pair) |

#### Returns

[`PairArray`](../README.md#pairarray)

#### Defined in

[account.ts:56](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L56)

___

### toPairObject

▸ **toPairObject**(`pair`): [`PairObject`](../interfaces/PairObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`Pair`](../README.md#pair) |

#### Returns

[`PairObject`](../interfaces/PairObject.md)

#### Defined in

[account.ts:52](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L52)

___

### toPairString

▸ **toPairString**(`pair`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`Pair`](../README.md#pair) |

#### Returns

`string`

#### Defined in

[account.ts:48](https://github.com/ozum/3commas/blob/b3896a3/src/account.ts#L48)

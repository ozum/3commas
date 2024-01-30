[3commas](../README.md) / AccountRawDto

# Interface: AccountRawDto

## Hierarchy

- `Required`\<`AccountBaseDto`\>

  ↳ **`AccountRawDto`**

## Table of contents

### Properties

- [address](AccountRawDto.md#address)
- [apiKey](AccountRawDto.md#apikey)
- [apiKeyInvalid](AccountRawDto.md#apikeyinvalid)
- [autoBalanceCurrencyChangeLimit](AccountRawDto.md#autobalancecurrencychangelimit)
- [autoBalanceError](AccountRawDto.md#autobalanceerror)
- [autoBalanceMethod](AccountRawDto.md#autobalancemethod)
- [autoBalancePeriod](AccountRawDto.md#autobalanceperiod)
- [autoBalancePortfolio](AccountRawDto.md#autobalanceportfolio)
- [autoBalancePortfolioId](AccountRawDto.md#autobalanceportfolioid)
- [autobalanceEnabled](AccountRawDto.md#autobalanceenabled)
- [availableForTrading](AccountRawDto.md#availablefortrading)
- [availableIncludeInSummary](AccountRawDto.md#availableincludeinsummary)
- [botsAllowed](AccountRawDto.md#botsallowed)
- [botsTslAllowed](AccountRawDto.md#botstslallowed)
- [botsTtpAllowed](AccountRawDto.md#botsttpallowed)
- [btcAmount](AccountRawDto.md#btcamount)
- [btcProfit](AccountRawDto.md#btcprofit)
- [btcProfitPercentage](AccountRawDto.md#btcprofitpercentage)
- [conditionalBuySupported](AccountRawDto.md#conditionalbuysupported)
- [createdAt](AccountRawDto.md#createdat)
- [customerId](AccountRawDto.md#customerid)
- [dayProfitBtc](AccountRawDto.md#dayprofitbtc)
- [dayProfitBtcPercentage](AccountRawDto.md#dayprofitbtcpercentage)
- [dayProfitPrimaryDisplayCurrency](AccountRawDto.md#dayprofitprimarydisplaycurrency)
- [dayProfitPrimaryDisplayCurrencyPercentage](AccountRawDto.md#dayprofitprimarydisplaycurrencypercentage)
- [dayProfitUsd](AccountRawDto.md#dayprofitusd)
- [dayProfitUsdPercentage](AccountRawDto.md#dayprofitusdpercentage)
- [depositEnabled](AccountRawDto.md#depositenabled)
- [exchangeName](AccountRawDto.md#exchangename)
- [fastConvertAvailable](AccountRawDto.md#fastconvertavailable)
- [gordonBotsAvailable](AccountRawDto.md#gordonbotsavailable)
- [gridBotsAllowed](AccountRawDto.md#gridbotsallowed)
- [hedgeModeAvailable](AccountRawDto.md#hedgemodeavailable)
- [hedgeModeEnabled](AccountRawDto.md#hedgemodeenabled)
- [id](AccountRawDto.md#id)
- [includeInSummary](AccountRawDto.md#includeinsummary)
- [isLocked](AccountRawDto.md#islocked)
- [lastAutoBalance](AccountRawDto.md#lastautobalance)
- [lockReason](AccountRawDto.md#lockreason)
- [marketBuySupported](AccountRawDto.md#marketbuysupported)
- [marketCode](AccountRawDto.md#marketcode)
- [marketIcon](AccountRawDto.md#marketicon)
- [marketSellSupported](AccountRawDto.md#marketsellsupported)
- [multiBotsAllowed](AccountRawDto.md#multibotsallowed)
- [name](AccountRawDto.md#name)
- [passphrase](AccountRawDto.md#passphrase)
- [prettyDisplayType](AccountRawDto.md#prettydisplaytype)
- [primaryDisplayCurrencyAmount](AccountRawDto.md#primarydisplaycurrencyamount)
- [primaryDisplayCurrencyProfit](AccountRawDto.md#primarydisplaycurrencyprofit)
- [primaryDisplayCurrencyProfitPercentage](AccountRawDto.md#primarydisplaycurrencyprofitpercentage)
- [secret](AccountRawDto.md#secret)
- [smartTradingSupported](AccountRawDto.md#smarttradingsupported)
- [statsSupported](AccountRawDto.md#statssupported)
- [subaccountName](AccountRawDto.md#subaccountname)
- [supportedMarketTypes](AccountRawDto.md#supportedmarkettypes)
- [totalBtcProfit](AccountRawDto.md#totalbtcprofit)
- [totalPrimaryDisplayCurrencyProfit](AccountRawDto.md#totalprimarydisplaycurrencyprofit)
- [totalUsdProfit](AccountRawDto.md#totalusdprofit)
- [tradingSupported](AccountRawDto.md#tradingsupported)
- [updatedAt](AccountRawDto.md#updatedat)
- [usdAmount](AccountRawDto.md#usdamount)
- [usdProfit](AccountRawDto.md#usdprofit)
- [usdProfitPercentage](AccountRawDto.md#usdprofitpercentage)

## Properties

### address

• `Optional` **address**: `string`

#### Defined in

[api/types/account.ts:68](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L68)

___

### apiKey

• **apiKey**: `string`

#### Inherited from

Required.apiKey

#### Defined in

[api/types/account.ts:7](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L7)

___

### apiKeyInvalid

• **apiKeyInvalid**: `boolean`

#### Defined in

[api/types/account.ts:39](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L39)

___

### autoBalanceCurrencyChangeLimit

• **autoBalanceCurrencyChangeLimit**: ``null`` \| `number`

#### Defined in

[api/types/account.ts:17](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L17)

___

### autoBalanceError

• **autoBalanceError**: ``null`` \| `string`

#### Defined in

[api/types/account.ts:51](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L51)

___

### autoBalanceMethod

• **autoBalanceMethod**: ``null`` \| `string`

#### Defined in

[api/types/account.ts:50](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L50)

___

### autoBalancePeriod

• **autoBalancePeriod**: `number`

#### Defined in

[api/types/account.ts:15](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L15)

___

### autoBalancePortfolio

• `Optional` **autoBalancePortfolio**: [`PortfolioDto`](PortfolioDto.md)

#### Defined in

[api/types/account.ts:69](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L69)

___

### autoBalancePortfolioId

• **autoBalancePortfolioId**: ``null`` \| `number`

#### Defined in

[api/types/account.ts:16](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L16)

___

### autobalanceEnabled

• **autobalanceEnabled**: `boolean`

#### Defined in

[api/types/account.ts:18](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L18)

___

### availableForTrading

• **availableForTrading**: `object`

#### Defined in

[api/types/account.ts:23](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L23)

___

### availableIncludeInSummary

• **availableIncludeInSummary**: `boolean`

#### Defined in

[api/types/account.ts:49](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L49)

___

### botsAllowed

• **botsAllowed**: `boolean`

#### Defined in

[api/types/account.ts:29](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L29)

___

### botsTslAllowed

• **botsTslAllowed**: `boolean`

#### Defined in

[api/types/account.ts:31](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L31)

___

### botsTtpAllowed

• **botsTtpAllowed**: `boolean`

#### Defined in

[api/types/account.ts:30](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L30)

___

### btcAmount

• **btcAmount**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:53](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L53)

___

### btcProfit

• **btcProfit**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:59](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L59)

___

### btcProfitPercentage

• **btcProfitPercentage**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:62](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L62)

___

### conditionalBuySupported

• **conditionalBuySupported**: `boolean`

#### Defined in

[api/types/account.ts:28](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L28)

___

### createdAt

• **createdAt**: `string`

#### Defined in

[api/types/account.ts:34](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L34)

___

### customerId

• **customerId**: ``null`` \| `string`

#### Inherited from

Required.customerId

#### Defined in

[api/types/account.ts:8](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L8)

___

### dayProfitBtc

• **dayProfitBtc**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:55](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L55)

___

### dayProfitBtcPercentage

• **dayProfitBtcPercentage**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:57](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L57)

___

### dayProfitPrimaryDisplayCurrency

• **dayProfitPrimaryDisplayCurrency**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

[api/types/account.ts:46](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L46)

___

### dayProfitPrimaryDisplayCurrencyPercentage

• **dayProfitPrimaryDisplayCurrencyPercentage**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

[api/types/account.ts:45](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L45)

___

### dayProfitUsd

• **dayProfitUsd**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:56](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L56)

___

### dayProfitUsdPercentage

• **dayProfitUsdPercentage**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:58](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L58)

___

### depositEnabled

• **depositEnabled**: `boolean`

#### Defined in

[api/types/account.ts:41](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L41)

___

### exchangeName

• **exchangeName**: `string`

#### Defined in

[api/types/account.ts:66](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L66)

___

### fastConvertAvailable

• **fastConvertAvailable**: `boolean`

#### Defined in

[api/types/account.ts:37](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L37)

___

### gordonBotsAvailable

• **gordonBotsAvailable**: `boolean`

#### Defined in

[api/types/account.ts:32](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L32)

___

### gridBotsAllowed

• **gridBotsAllowed**: `boolean`

#### Defined in

[api/types/account.ts:38](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L38)

___

### hedgeModeAvailable

• **hedgeModeAvailable**: `boolean`

#### Defined in

[api/types/account.ts:19](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L19)

___

### hedgeModeEnabled

• **hedgeModeEnabled**: `boolean`

#### Defined in

[api/types/account.ts:20](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L20)

___

### id

• **id**: `number`

#### Defined in

[api/types/account.ts:14](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L14)

___

### includeInSummary

• **includeInSummary**: `boolean`

#### Inherited from

Required.includeInSummary

#### Defined in

[api/types/account.ts:10](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L10)

___

### isLocked

• **isLocked**: `boolean`

#### Defined in

[api/types/account.ts:21](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L21)

___

### lastAutoBalance

• **lastAutoBalance**: ``null`` \| `number`

#### Defined in

[api/types/account.ts:36](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L36)

___

### lockReason

• **lockReason**: ``null`` \| `string`

#### Defined in

[api/types/account.ts:52](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L52)

___

### marketBuySupported

• **marketBuySupported**: `boolean`

#### Defined in

[api/types/account.ts:26](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L26)

___

### marketCode

• **marketCode**: [`MarketCode`](../README.md#marketcode)

#### Defined in

[api/types/account.ts:67](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L67)

___

### marketIcon

• **marketIcon**: `string`

#### Defined in

[api/types/account.ts:40](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L40)

___

### marketSellSupported

• **marketSellSupported**: `boolean`

#### Defined in

[api/types/account.ts:27](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L27)

___

### multiBotsAllowed

• **multiBotsAllowed**: `boolean`

#### Defined in

[api/types/account.ts:33](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L33)

___

### name

• **name**: `string`

#### Inherited from

Required.name

#### Defined in

[api/types/account.ts:6](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L6)

___

### passphrase

• `Optional` **passphrase**: `string`

#### Defined in

[api/types/account.ts:71](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L71)

___

### prettyDisplayType

• **prettyDisplayType**: `string`

#### Defined in

[api/types/account.ts:65](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L65)

___

### primaryDisplayCurrencyAmount

• **primaryDisplayCurrencyAmount**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

[api/types/account.ts:47](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L47)

___

### primaryDisplayCurrencyProfit

• **primaryDisplayCurrencyProfit**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

[api/types/account.ts:44](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L44)

___

### primaryDisplayCurrencyProfitPercentage

• **primaryDisplayCurrencyProfitPercentage**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

[api/types/account.ts:43](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L43)

___

### secret

• `Optional` **secret**: `string`

#### Defined in

[api/types/account.ts:70](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L70)

___

### smartTradingSupported

• **smartTradingSupported**: `boolean`

#### Defined in

[api/types/account.ts:22](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L22)

___

### statsSupported

• **statsSupported**: `boolean`

#### Defined in

[api/types/account.ts:24](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L24)

___

### subaccountName

• **subaccountName**: ``null`` \| `string`

#### Inherited from

Required.subaccountName

#### Defined in

[api/types/account.ts:9](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L9)

___

### supportedMarketTypes

• **supportedMarketTypes**: (``"spot"`` \| ``"futures"``)[]

#### Defined in

[api/types/account.ts:42](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L42)

___

### totalBtcProfit

• **totalBtcProfit**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:63](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L63)

___

### totalPrimaryDisplayCurrencyProfit

• **totalPrimaryDisplayCurrencyProfit**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

[api/types/account.ts:48](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L48)

___

### totalUsdProfit

• **totalUsdProfit**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:64](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L64)

___

### tradingSupported

• **tradingSupported**: `boolean`

#### Defined in

[api/types/account.ts:25](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L25)

___

### updatedAt

• **updatedAt**: `string`

#### Defined in

[api/types/account.ts:35](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L35)

___

### usdAmount

• **usdAmount**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:54](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L54)

___

### usdProfit

• **usdProfit**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:60](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L60)

___

### usdProfitPercentage

• **usdProfitPercentage**: ``"CONVERTIBLE"``

#### Defined in

[api/types/account.ts:61](https://github.com/ozum/3commas/blob/b3896a3/src/api/types/account.ts#L61)

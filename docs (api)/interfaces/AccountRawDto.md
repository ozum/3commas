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

api/types/account.ts:68

---

### apiKey

• **apiKey**: `string`

#### Inherited from

Required.apiKey

#### Defined in

api/types/account.ts:7

---

### apiKeyInvalid

• **apiKeyInvalid**: `boolean`

#### Defined in

api/types/account.ts:39

---

### autoBalanceCurrencyChangeLimit

• **autoBalanceCurrencyChangeLimit**: `null` \| `number`

#### Defined in

api/types/account.ts:17

---

### autoBalanceError

• **autoBalanceError**: `null` \| `string`

#### Defined in

api/types/account.ts:51

---

### autoBalanceMethod

• **autoBalanceMethod**: `null` \| `string`

#### Defined in

api/types/account.ts:50

---

### autoBalancePeriod

• **autoBalancePeriod**: `number`

#### Defined in

api/types/account.ts:15

---

### autoBalancePortfolio

• `Optional` **autoBalancePortfolio**: [`PortfolioDto`](PortfolioDto.md)

#### Defined in

api/types/account.ts:69

---

### autoBalancePortfolioId

• **autoBalancePortfolioId**: `null` \| `number`

#### Defined in

api/types/account.ts:16

---

### autobalanceEnabled

• **autobalanceEnabled**: `boolean`

#### Defined in

api/types/account.ts:18

---

### availableForTrading

• **availableForTrading**: `object`

#### Defined in

api/types/account.ts:23

---

### availableIncludeInSummary

• **availableIncludeInSummary**: `boolean`

#### Defined in

api/types/account.ts:49

---

### botsAllowed

• **botsAllowed**: `boolean`

#### Defined in

api/types/account.ts:29

---

### botsTslAllowed

• **botsTslAllowed**: `boolean`

#### Defined in

api/types/account.ts:31

---

### botsTtpAllowed

• **botsTtpAllowed**: `boolean`

#### Defined in

api/types/account.ts:30

---

### btcAmount

• **btcAmount**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:53

---

### btcProfit

• **btcProfit**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:59

---

### btcProfitPercentage

• **btcProfitPercentage**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:62

---

### conditionalBuySupported

• **conditionalBuySupported**: `boolean`

#### Defined in

api/types/account.ts:28

---

### createdAt

• **createdAt**: `string`

#### Defined in

api/types/account.ts:34

---

### customerId

• **customerId**: `null` \| `string`

#### Inherited from

Required.customerId

#### Defined in

api/types/account.ts:8

---

### dayProfitBtc

• **dayProfitBtc**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:55

---

### dayProfitBtcPercentage

• **dayProfitBtcPercentage**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:57

---

### dayProfitPrimaryDisplayCurrency

• **dayProfitPrimaryDisplayCurrency**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

api/types/account.ts:46

---

### dayProfitPrimaryDisplayCurrencyPercentage

• **dayProfitPrimaryDisplayCurrencyPercentage**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

api/types/account.ts:45

---

### dayProfitUsd

• **dayProfitUsd**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:56

---

### dayProfitUsdPercentage

• **dayProfitUsdPercentage**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:58

---

### depositEnabled

• **depositEnabled**: `boolean`

#### Defined in

api/types/account.ts:41

---

### exchangeName

• **exchangeName**: `string`

#### Defined in

api/types/account.ts:66

---

### fastConvertAvailable

• **fastConvertAvailable**: `boolean`

#### Defined in

api/types/account.ts:37

---

### gordonBotsAvailable

• **gordonBotsAvailable**: `boolean`

#### Defined in

api/types/account.ts:32

---

### gridBotsAllowed

• **gridBotsAllowed**: `boolean`

#### Defined in

api/types/account.ts:38

---

### hedgeModeAvailable

• **hedgeModeAvailable**: `boolean`

#### Defined in

api/types/account.ts:19

---

### hedgeModeEnabled

• **hedgeModeEnabled**: `boolean`

#### Defined in

api/types/account.ts:20

---

### id

• **id**: `number`

#### Defined in

api/types/account.ts:14

---

### includeInSummary

• **includeInSummary**: `boolean`

#### Inherited from

Required.includeInSummary

#### Defined in

api/types/account.ts:10

---

### isLocked

• **isLocked**: `boolean`

#### Defined in

api/types/account.ts:21

---

### lastAutoBalance

• **lastAutoBalance**: `null` \| `number`

#### Defined in

api/types/account.ts:36

---

### lockReason

• **lockReason**: `null` \| `string`

#### Defined in

api/types/account.ts:52

---

### marketBuySupported

• **marketBuySupported**: `boolean`

#### Defined in

api/types/account.ts:26

---

### marketCode

• **marketCode**: [`MarketCode`](../README.md#marketcode)

#### Defined in

api/types/account.ts:67

---

### marketIcon

• **marketIcon**: `string`

#### Defined in

api/types/account.ts:40

---

### marketSellSupported

• **marketSellSupported**: `boolean`

#### Defined in

api/types/account.ts:27

---

### multiBotsAllowed

• **multiBotsAllowed**: `boolean`

#### Defined in

api/types/account.ts:33

---

### name

• **name**: `string`

#### Inherited from

Required.name

#### Defined in

api/types/account.ts:6

---

### passphrase

• `Optional` **passphrase**: `string`

#### Defined in

api/types/account.ts:71

---

### prettyDisplayType

• **prettyDisplayType**: `string`

#### Defined in

api/types/account.ts:65

---

### primaryDisplayCurrencyAmount

• **primaryDisplayCurrencyAmount**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

api/types/account.ts:47

---

### primaryDisplayCurrencyProfit

• **primaryDisplayCurrencyProfit**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

api/types/account.ts:44

---

### primaryDisplayCurrencyProfitPercentage

• **primaryDisplayCurrencyProfitPercentage**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

api/types/account.ts:43

---

### secret

• `Optional` **secret**: `string`

#### Defined in

api/types/account.ts:70

---

### smartTradingSupported

• **smartTradingSupported**: `boolean`

#### Defined in

api/types/account.ts:22

---

### statsSupported

• **statsSupported**: `boolean`

#### Defined in

api/types/account.ts:24

---

### subaccountName

• **subaccountName**: `null` \| `string`

#### Inherited from

Required.subaccountName

#### Defined in

api/types/account.ts:9

---

### supportedMarketTypes

• **supportedMarketTypes**: (`"spot"` \| `"futures"`)[]

#### Defined in

api/types/account.ts:42

---

### totalBtcProfit

• **totalBtcProfit**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:63

---

### totalPrimaryDisplayCurrencyProfit

• **totalPrimaryDisplayCurrencyProfit**: [`CurrencyAmount`](CurrencyAmount.md)

#### Defined in

api/types/account.ts:48

---

### totalUsdProfit

• **totalUsdProfit**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:64

---

### tradingSupported

• **tradingSupported**: `boolean`

#### Defined in

api/types/account.ts:25

---

### updatedAt

• **updatedAt**: `string`

#### Defined in

api/types/account.ts:35

---

### usdAmount

• **usdAmount**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:54

---

### usdProfit

• **usdProfit**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:60

---

### usdProfitPercentage

• **usdProfitPercentage**: `"CONVERTIBLE"`

#### Defined in

api/types/account.ts:61

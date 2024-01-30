[3commas](../README.md) / BotRawDto

# Interface: BotRawDto

## Hierarchy

- `Required`\<`BotBaseDto`\>

  ↳ **`BotRawDto`**

## Table of contents

### Properties

- [accountId](BotRawDto.md#accountid)
- [accountName](BotRawDto.md#accountname)
- [activeDeals](BotRawDto.md#activedeals)
- [activeDealsCount](BotRawDto.md#activedealscount)
- [activeDealsUsdProfit](BotRawDto.md#activedealsusdprofit)
- [activeSafetyOrdersCount](BotRawDto.md#activesafetyorderscount)
- [allowedDealsOnSamePair](BotRawDto.md#alloweddealsonsamepair)
- [baseOrderVolume](BotRawDto.md#baseordervolume)
- [baseOrderVolumeType](BotRawDto.md#baseordervolumetype)
- [botEvents](BotRawDto.md#botevents)
- [btcPriceLimit](BotRawDto.md#btcpricelimit)
- [closeDealsTimeout](BotRawDto.md#closedealstimeout)
- [closeStrategyList](BotRawDto.md#closestrategylist)
- [cooldown](BotRawDto.md#cooldown)
- [createdAt](BotRawDto.md#createdat)
- [dealStartDelaySeconds](BotRawDto.md#dealstartdelayseconds)
- [dealsCounter](BotRawDto.md#dealscounter)
- [deletable](BotRawDto.md#deletable)
- [disableAfterDealsCount](BotRawDto.md#disableafterdealscount)
- [easyFormSupported](BotRawDto.md#easyformsupported)
- [finishedDealsCount](BotRawDto.md#finisheddealscount)
- [finishedDealsProfitUsd](BotRawDto.md#finisheddealsprofitusd)
- [id](BotRawDto.md#id)
- [isEnabled](BotRawDto.md#isenabled)
- [leverageCustomValue](BotRawDto.md#leveragecustomvalue)
- [leverageType](BotRawDto.md#leveragetype)
- [martingaleStepCoefficient](BotRawDto.md#martingalestepcoefficient)
- [martingaleVolumeCoefficient](BotRawDto.md#martingalevolumecoefficient)
- [maxActiveDeals](BotRawDto.md#maxactivedeals)
- [maxPrice](BotRawDto.md#maxprice)
- [maxPricePercentage](BotRawDto.md#maxpricepercentage)
- [maxSafetyOrders](BotRawDto.md#maxsafetyorders)
- [minPrice](BotRawDto.md#minprice)
- [minPricePercentage](BotRawDto.md#minpricepercentage)
- [minProfitPercentage](BotRawDto.md#minprofitpercentage)
- [minProfitType](BotRawDto.md#minprofittype)
- [minVolumeBtc24h](BotRawDto.md#minvolumebtc24h)
- [name](BotRawDto.md#name)
- [pairs](BotRawDto.md#pairs)
- [profitCurrency](BotRawDto.md#profitcurrency)
- [reinvestedVolumeUsd](BotRawDto.md#reinvestedvolumeusd)
- [reinvestingPercentage](BotRawDto.md#reinvestingpercentage)
- [riskReductionPercentage](BotRawDto.md#riskreductionpercentage)
- [safetyOrderStepPercentage](BotRawDto.md#safetyordersteppercentage)
- [safetyOrderVolume](BotRawDto.md#safetyordervolume)
- [safetyOrderVolumeType](BotRawDto.md#safetyordervolumetype)
- [startOrderType](BotRawDto.md#startordertype)
- [stopLossPercentage](BotRawDto.md#stoplosspercentage)
- [stopLossTimeoutEnabled](BotRawDto.md#stoplosstimeoutenabled)
- [stopLossTimeoutInSeconds](BotRawDto.md#stoplosstimeoutinseconds)
- [stopLossType](BotRawDto.md#stoplosstype)
- [strategy](BotRawDto.md#strategy)
- [strategyList](BotRawDto.md#strategylist)
- [takeProfit](BotRawDto.md#takeprofit)
- [takeProfitType](BotRawDto.md#takeprofittype)
- [tempId](BotRawDto.md#tempid)
- [trailingDeviation](BotRawDto.md#trailingdeviation)
- [trailingEnabled](BotRawDto.md#trailingenabled)
- [tslEnabled](BotRawDto.md#tslenabled)
- [type](BotRawDto.md#type)
- [updatedAt](BotRawDto.md#updatedat)
- [urlSecret](BotRawDto.md#urlsecret)

## Properties

### accountId

• **accountId**: `number`

#### Defined in

[api/types/bot.ts:55](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L55)

---

### accountName

• **accountName**: `string`

#### Defined in

[api/types/bot.ts:56](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L56)

---

### activeDeals

• `Optional` **activeDeals**: `Convert`\<[`DealRawDto`](DealRawDto.md), `string`\>[]

#### Defined in

[api/types/bot.ts:69](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L69)

---

### activeDealsCount

• **activeDealsCount**: `number`

#### Defined in

[api/types/bot.ts:57](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L57)

---

### activeDealsUsdProfit

• **activeDealsUsdProfit**: `"CONVERTIBLE"`

#### Defined in

[api/types/bot.ts:58](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L58)

---

### activeSafetyOrdersCount

• **activeSafetyOrdersCount**: `number`

#### Inherited from

Required.activeSafetyOrdersCount

#### Defined in

[api/types/bot.ts:17](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L17)

---

### allowedDealsOnSamePair

• **allowedDealsOnSamePair**: `null` \| `number`

#### Inherited from

Required.allowedDealsOnSamePair

#### Defined in

[api/types/bot.ts:40](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L40)

---

### baseOrderVolume

• **baseOrderVolume**: `"CONVERTIBLE"`

#### Inherited from

Required.baseOrderVolume

#### Defined in

[api/types/bot.ts:9](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L9)

---

### baseOrderVolumeType

• **baseOrderVolumeType**: [`VolumeType`](../README.md#volumetype)

#### Inherited from

Required.baseOrderVolumeType

#### Defined in

[api/types/bot.ts:10](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L10)

---

### botEvents

• `Optional` **botEvents**: [\{ `createdAt`: `string` ; `message`: `string` }]

#### Defined in

[api/types/bot.ts:70](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L70)

---

### btcPriceLimit

• **btcPriceLimit**: `"CONVERTIBLE"`

#### Inherited from

Required.btcPriceLimit

#### Defined in

[api/types/bot.ts:22](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L22)

---

### closeDealsTimeout

• **closeDealsTimeout**: `null` \| `number`

#### Inherited from

Required.closeDealsTimeout

#### Defined in

[api/types/bot.ts:41](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L41)

---

### closeStrategyList

• **closeStrategyList**: [`StrategyRawDto`](../README.md#strategyrawdto)[]

#### Inherited from

Required.closeStrategyList

#### Defined in

[api/types/bot.ts:44](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L44)

---

### cooldown

• **cooldown**: `"CONVERTIBLE"`

#### Inherited from

Required.cooldown

#### Defined in

[api/types/bot.ts:19](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L19)

---

### createdAt

• **createdAt**: `string`

#### Defined in

[api/types/bot.ts:67](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L67)

---

### dealStartDelaySeconds

• **dealStartDelaySeconds**: `null` \| `number`

#### Inherited from

Required.dealStartDelaySeconds

#### Defined in

[api/types/bot.ts:35](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L35)

---

### dealsCounter

• **dealsCounter**: `null` \| `number`

#### Defined in

[api/types/bot.ts:59](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L59)

---

### deletable

• `Optional` **deletable**: `boolean`

#### Defined in

[api/types/bot.ts:60](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L60)

---

### disableAfterDealsCount

• **disableAfterDealsCount**: `null` \| `number`

#### Inherited from

Required.disableAfterDealsCount

#### Defined in

[api/types/bot.ts:39](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L39)

---

### easyFormSupported

• **easyFormSupported**: `boolean`

#### Defined in

[api/types/bot.ts:61](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L61)

---

### finishedDealsCount

• **finishedDealsCount**: `"CONVERTIBLE"`

#### Defined in

[api/types/bot.ts:62](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L62)

---

### finishedDealsProfitUsd

• **finishedDealsProfitUsd**: `"CONVERTIBLE"`

#### Defined in

[api/types/bot.ts:63](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L63)

---

### id

• **id**: `number`

#### Defined in

[api/types/bot.ts:54](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L54)

---

### isEnabled

• **isEnabled**: `boolean`

#### Defined in

[api/types/bot.ts:64](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L64)

---

### leverageCustomValue

• **leverageCustomValue**: `null` \| `"CONVERTIBLE"`

#### Inherited from

Required.leverageCustomValue

#### Defined in

[api/types/bot.ts:28](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L28)

---

### leverageType

• **leverageType**: `"isolated"` \| `"custom"` \| `"cross"` \| `"not_specified"`

#### Inherited from

Required.leverageType

#### Defined in

[api/types/bot.ts:27](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L27)

---

### martingaleStepCoefficient

• **martingaleStepCoefficient**: `"CONVERTIBLE"`

#### Inherited from

Required.martingaleStepCoefficient

#### Defined in

[api/types/bot.ts:14](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L14)

---

### martingaleVolumeCoefficient

• **martingaleVolumeCoefficient**: `"CONVERTIBLE"`

#### Inherited from

Required.martingaleVolumeCoefficient

#### Defined in

[api/types/bot.ts:15](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L15)

---

### maxActiveDeals

• **maxActiveDeals**: `number`

#### Inherited from

Required.maxActiveDeals

#### Defined in

[api/types/bot.ts:8](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L8)

---

### maxPrice

• **maxPrice**: `null` \| `"CONVERTIBLE"`

#### Inherited from

Required.maxPrice

#### Defined in

[api/types/bot.ts:30](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L30)

---

### maxPricePercentage

• **maxPricePercentage**: `null` \| `"CONVERTIBLE"`

#### Inherited from

Required.maxPricePercentage

#### Defined in

[api/types/bot.ts:49](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L49)

---

### maxSafetyOrders

• **maxSafetyOrders**: `number`

#### Inherited from

Required.maxSafetyOrders

#### Defined in

[api/types/bot.ts:16](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L16)

---

### minPrice

• **minPrice**: `null` \| `"CONVERTIBLE"`

#### Inherited from

Required.minPrice

#### Defined in

[api/types/bot.ts:29](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L29)

---

### minPricePercentage

• **minPricePercentage**: `null` \| `"CONVERTIBLE"`

#### Inherited from

Required.minPricePercentage

#### Defined in

[api/types/bot.ts:48](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L48)

---

### minProfitPercentage

• **minProfitPercentage**: `null` \| `"CONVERTIBLE"`

#### Inherited from

Required.minProfitPercentage

#### Defined in

[api/types/bot.ts:42](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L42)

---

### minProfitType

• **minProfitType**: `null` \| `"base_order_volume"` \| `"total_bought_volume"`

#### Inherited from

Required.minProfitType

#### Defined in

[api/types/bot.ts:43](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L43)

---

### minVolumeBtc24h

• **minVolumeBtc24h**: `"CONVERTIBLE"`

#### Inherited from

Required.minVolumeBtc24h

#### Defined in

[api/types/bot.ts:33](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L33)

---

### name

• **name**: `string`

#### Inherited from

Required.name

#### Defined in

[api/types/bot.ts:6](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L6)

---

### pairs

• **pairs**: `string` \| `string`[]

#### Inherited from

Required.pairs

#### Defined in

[api/types/bot.ts:7](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L7)

---

### profitCurrency

• **profitCurrency**: `"quote_currency"` \| `"base_currency"`

#### Inherited from

Required.profitCurrency

#### Defined in

[api/types/bot.ts:36](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L36)

---

### reinvestedVolumeUsd

• **reinvestedVolumeUsd**: `null` \| `"CONVERTIBLE"`

#### Inherited from

Required.reinvestedVolumeUsd

#### Defined in

[api/types/bot.ts:47](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L47)

---

### reinvestingPercentage

• **reinvestingPercentage**: `null` \| `"CONVERTIBLE"`

#### Inherited from

Required.reinvestingPercentage

#### Defined in

[api/types/bot.ts:46](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L46)

---

### riskReductionPercentage

• **riskReductionPercentage**: `null` \| `"CONVERTIBLE"`

#### Inherited from

Required.riskReductionPercentage

#### Defined in

[api/types/bot.ts:45](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L45)

---

### safetyOrderStepPercentage

• **safetyOrderStepPercentage**: `"CONVERTIBLE"`

#### Inherited from

Required.safetyOrderStepPercentage

#### Defined in

[api/types/bot.ts:24](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L24)

---

### safetyOrderVolume

• **safetyOrderVolume**: `"CONVERTIBLE"`

#### Inherited from

Required.safetyOrderVolume

#### Defined in

[api/types/bot.ts:12](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L12)

---

### safetyOrderVolumeType

• **safetyOrderVolumeType**: [`VolumeType`](../README.md#volumetype)

#### Inherited from

Required.safetyOrderVolumeType

#### Defined in

[api/types/bot.ts:13](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L13)

---

### startOrderType

• **startOrderType**: `"limit"` \| `"market"`

#### Inherited from

Required.startOrderType

#### Defined in

[api/types/bot.ts:37](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L37)

---

### stopLossPercentage

• **stopLossPercentage**: `"CONVERTIBLE"`

#### Inherited from

Required.stopLossPercentage

#### Defined in

[api/types/bot.ts:18](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L18)

---

### stopLossTimeoutEnabled

• **stopLossTimeoutEnabled**: `boolean`

#### Inherited from

Required.stopLossTimeoutEnabled

#### Defined in

[api/types/bot.ts:31](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L31)

---

### stopLossTimeoutInSeconds

• **stopLossTimeoutInSeconds**: `number`

#### Inherited from

Required.stopLossTimeoutInSeconds

#### Defined in

[api/types/bot.ts:32](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L32)

---

### stopLossType

• **stopLossType**: `"stop_loss"` \| `"stop_loss_and_disable_bot"`

#### Inherited from

Required.stopLossType

#### Defined in

[api/types/bot.ts:38](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L38)

---

### strategy

• **strategy**: [`Strategy`](../README.md#strategy)

#### Inherited from

Required.strategy

#### Defined in

[api/types/bot.ts:23](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L23)

---

### strategyList

• **strategyList**: [`StrategyRawDto`](../README.md#strategyrawdto)[]

#### Inherited from

Required.strategyList

#### Defined in

[api/types/bot.ts:26](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L26)

---

### takeProfit

• **takeProfit**: `"CONVERTIBLE"`

#### Inherited from

Required.takeProfit

#### Defined in

[api/types/bot.ts:11](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L11)

---

### takeProfitType

• **takeProfitType**: `"base"` \| `"total"`

#### Inherited from

Required.takeProfitType

#### Defined in

[api/types/bot.ts:25](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L25)

---

### tempId

• `Optional` **tempId**: `number`

#### Defined in

[api/types/bot.ts:53](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L53)

---

### trailingDeviation

• **trailingDeviation**: `"CONVERTIBLE"`

#### Inherited from

Required.trailingDeviation

#### Defined in

[api/types/bot.ts:21](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L21)

---

### trailingEnabled

• **trailingEnabled**: `null` \| `boolean`

#### Inherited from

Required.trailingEnabled

#### Defined in

[api/types/bot.ts:20](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L20)

---

### tslEnabled

• **tslEnabled**: `boolean`

#### Inherited from

Required.tslEnabled

#### Defined in

[api/types/bot.ts:34](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L34)

---

### type

• **type**: `"Bot::MultiBot"` \| `"Bot::SingleBot"` \| `"Bot::SwitchBot"`

#### Defined in

[api/types/bot.ts:65](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L65)

---

### updatedAt

• **updatedAt**: `string`

#### Defined in

[api/types/bot.ts:68](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L68)

---

### urlSecret

• **urlSecret**: `string`

#### Defined in

[api/types/bot.ts:66](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L66)

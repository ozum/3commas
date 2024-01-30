[3commas](../README.md) / BotCreateDto

# Interface: BotCreateDto

## Hierarchy

- [`Numerify`](../README.md#numerify)\<`BotBaseDto`\>

  ↳ **`BotCreateDto`**

## Table of contents

### Properties

- [accountId](BotCreateDto.md#accountid)
- [activeSafetyOrdersCount](BotCreateDto.md#activesafetyorderscount)
- [allowedDealsOnSamePair](BotCreateDto.md#alloweddealsonsamepair)
- [baseOrderVolume](BotCreateDto.md#baseordervolume)
- [baseOrderVolumeType](BotCreateDto.md#baseordervolumetype)
- [btcPriceLimit](BotCreateDto.md#btcpricelimit)
- [closeDealsTimeout](BotCreateDto.md#closedealstimeout)
- [closeStrategyList](BotCreateDto.md#closestrategylist)
- [cooldown](BotCreateDto.md#cooldown)
- [dealStartDelaySeconds](BotCreateDto.md#dealstartdelayseconds)
- [disableAfterDealsCount](BotCreateDto.md#disableafterdealscount)
- [leverageCustomValue](BotCreateDto.md#leveragecustomvalue)
- [leverageType](BotCreateDto.md#leveragetype)
- [martingaleStepCoefficient](BotCreateDto.md#martingalestepcoefficient)
- [martingaleVolumeCoefficient](BotCreateDto.md#martingalevolumecoefficient)
- [maxActiveDeals](BotCreateDto.md#maxactivedeals)
- [maxPrice](BotCreateDto.md#maxprice)
- [maxPricePercentage](BotCreateDto.md#maxpricepercentage)
- [maxSafetyOrders](BotCreateDto.md#maxsafetyorders)
- [minPrice](BotCreateDto.md#minprice)
- [minPricePercentage](BotCreateDto.md#minpricepercentage)
- [minProfitPercentage](BotCreateDto.md#minprofitpercentage)
- [minProfitType](BotCreateDto.md#minprofittype)
- [minVolumeBtc24h](BotCreateDto.md#minvolumebtc24h)
- [name](BotCreateDto.md#name)
- [pairs](BotCreateDto.md#pairs)
- [profitCurrency](BotCreateDto.md#profitcurrency)
- [reinvestedVolumeUsd](BotCreateDto.md#reinvestedvolumeusd)
- [reinvestingPercentage](BotCreateDto.md#reinvestingpercentage)
- [riskReductionPercentage](BotCreateDto.md#riskreductionpercentage)
- [safetyOrderStepPercentage](BotCreateDto.md#safetyordersteppercentage)
- [safetyOrderVolume](BotCreateDto.md#safetyordervolume)
- [safetyOrderVolumeType](BotCreateDto.md#safetyordervolumetype)
- [startOrderType](BotCreateDto.md#startordertype)
- [stopLossPercentage](BotCreateDto.md#stoplosspercentage)
- [stopLossTimeoutEnabled](BotCreateDto.md#stoplosstimeoutenabled)
- [stopLossTimeoutInSeconds](BotCreateDto.md#stoplosstimeoutinseconds)
- [stopLossType](BotCreateDto.md#stoplosstype)
- [strategy](BotCreateDto.md#strategy)
- [strategyList](BotCreateDto.md#strategylist)
- [takeProfit](BotCreateDto.md#takeprofit)
- [takeProfitType](BotCreateDto.md#takeprofittype)
- [trailingDeviation](BotCreateDto.md#trailingdeviation)
- [trailingEnabled](BotCreateDto.md#trailingenabled)
- [tslEnabled](BotCreateDto.md#tslenabled)

## Properties

### accountId

• **accountId**: `number`

#### Defined in

[api/types/bot.ts:77](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L77)

---

### activeSafetyOrdersCount

• **activeSafetyOrdersCount**: `number`

#### Inherited from

Numerify.activeSafetyOrdersCount

#### Defined in

[api/types/bot.ts:17](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L17)

---

### allowedDealsOnSamePair

• `Optional` **allowedDealsOnSamePair**: `null` \| `number`

#### Inherited from

Numerify.allowedDealsOnSamePair

#### Defined in

[api/types/bot.ts:40](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L40)

---

### baseOrderVolume

• **baseOrderVolume**: `number`

#### Inherited from

Numerify.baseOrderVolume

#### Defined in

[api/types/bot.ts:9](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L9)

---

### baseOrderVolumeType

• `Optional` **baseOrderVolumeType**: [`VolumeType`](../README.md#volumetype)

#### Inherited from

Numerify.baseOrderVolumeType

#### Defined in

[api/types/bot.ts:10](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L10)

---

### btcPriceLimit

• `Optional` **btcPriceLimit**: `number`

#### Inherited from

Numerify.btcPriceLimit

#### Defined in

[api/types/bot.ts:22](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L22)

---

### closeDealsTimeout

• `Optional` **closeDealsTimeout**: `null` \| `number`

#### Inherited from

Numerify.closeDealsTimeout

#### Defined in

[api/types/bot.ts:41](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L41)

---

### closeStrategyList

• `Optional` **closeStrategyList**: `Convert`\<`undefined` \| [`StrategyRawDto`](../README.md#strategyrawdto)[], `number`\>

#### Inherited from

Numerify.closeStrategyList

#### Defined in

[api/types/bot.ts:44](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L44)

---

### cooldown

• `Optional` **cooldown**: `number`

#### Inherited from

Numerify.cooldown

#### Defined in

[api/types/bot.ts:19](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L19)

---

### dealStartDelaySeconds

• `Optional` **dealStartDelaySeconds**: `null` \| `number`

#### Inherited from

Numerify.dealStartDelaySeconds

#### Defined in

[api/types/bot.ts:35](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L35)

---

### disableAfterDealsCount

• `Optional` **disableAfterDealsCount**: `null` \| `number`

#### Inherited from

Numerify.disableAfterDealsCount

#### Defined in

[api/types/bot.ts:39](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L39)

---

### leverageCustomValue

• `Optional` **leverageCustomValue**: `null` \| `number`

#### Inherited from

Numerify.leverageCustomValue

#### Defined in

[api/types/bot.ts:28](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L28)

---

### leverageType

• `Optional` **leverageType**: `"isolated"` \| `"custom"` \| `"cross"` \| `"not_specified"`

#### Inherited from

Numerify.leverageType

#### Defined in

[api/types/bot.ts:27](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L27)

---

### martingaleStepCoefficient

• **martingaleStepCoefficient**: `number`

#### Inherited from

Numerify.martingaleStepCoefficient

#### Defined in

[api/types/bot.ts:14](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L14)

---

### martingaleVolumeCoefficient

• **martingaleVolumeCoefficient**: `number`

#### Inherited from

Numerify.martingaleVolumeCoefficient

#### Defined in

[api/types/bot.ts:15](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L15)

---

### maxActiveDeals

• `Optional` **maxActiveDeals**: `number`

#### Inherited from

Numerify.maxActiveDeals

#### Defined in

[api/types/bot.ts:8](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L8)

---

### maxPrice

• `Optional` **maxPrice**: `null` \| `number`

#### Inherited from

Numerify.maxPrice

#### Defined in

[api/types/bot.ts:30](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L30)

---

### maxPricePercentage

• `Optional` **maxPricePercentage**: `null` \| `number`

#### Inherited from

Numerify.maxPricePercentage

#### Defined in

[api/types/bot.ts:49](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L49)

---

### maxSafetyOrders

• **maxSafetyOrders**: `number`

#### Inherited from

Numerify.maxSafetyOrders

#### Defined in

[api/types/bot.ts:16](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L16)

---

### minPrice

• `Optional` **minPrice**: `null` \| `number`

#### Inherited from

Numerify.minPrice

#### Defined in

[api/types/bot.ts:29](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L29)

---

### minPricePercentage

• `Optional` **minPricePercentage**: `null` \| `number`

#### Inherited from

Numerify.minPricePercentage

#### Defined in

[api/types/bot.ts:48](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L48)

---

### minProfitPercentage

• `Optional` **minProfitPercentage**: `null` \| `number`

#### Inherited from

Numerify.minProfitPercentage

#### Defined in

[api/types/bot.ts:42](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L42)

---

### minProfitType

• `Optional` **minProfitType**: `null` \| `"base_order_volume"` \| `"total_bought_volume"`

#### Inherited from

Numerify.minProfitType

#### Defined in

[api/types/bot.ts:43](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L43)

---

### minVolumeBtc24h

• `Optional` **minVolumeBtc24h**: `number`

#### Inherited from

Numerify.minVolumeBtc24h

#### Defined in

[api/types/bot.ts:33](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L33)

---

### name

• **name**: `string`

#### Inherited from

Numerify.name

#### Defined in

[api/types/bot.ts:6](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L6)

---

### pairs

• **pairs**: `string` \| `string`[]

#### Inherited from

Numerify.pairs

#### Defined in

[api/types/bot.ts:7](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L7)

---

### profitCurrency

• `Optional` **profitCurrency**: `"quote_currency"` \| `"base_currency"`

#### Inherited from

Numerify.profitCurrency

#### Defined in

[api/types/bot.ts:36](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L36)

---

### reinvestedVolumeUsd

• `Optional` **reinvestedVolumeUsd**: `null` \| `number`

#### Inherited from

Numerify.reinvestedVolumeUsd

#### Defined in

[api/types/bot.ts:47](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L47)

---

### reinvestingPercentage

• `Optional` **reinvestingPercentage**: `null` \| `number`

#### Inherited from

Numerify.reinvestingPercentage

#### Defined in

[api/types/bot.ts:46](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L46)

---

### riskReductionPercentage

• `Optional` **riskReductionPercentage**: `null` \| `number`

#### Inherited from

Numerify.riskReductionPercentage

#### Defined in

[api/types/bot.ts:45](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L45)

---

### safetyOrderStepPercentage

• **safetyOrderStepPercentage**: `number`

#### Inherited from

Numerify.safetyOrderStepPercentage

#### Defined in

[api/types/bot.ts:24](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L24)

---

### safetyOrderVolume

• **safetyOrderVolume**: `number`

#### Inherited from

Numerify.safetyOrderVolume

#### Defined in

[api/types/bot.ts:12](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L12)

---

### safetyOrderVolumeType

• `Optional` **safetyOrderVolumeType**: [`VolumeType`](../README.md#volumetype)

#### Inherited from

Numerify.safetyOrderVolumeType

#### Defined in

[api/types/bot.ts:13](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L13)

---

### startOrderType

• `Optional` **startOrderType**: `"limit"` \| `"market"`

#### Inherited from

Numerify.startOrderType

#### Defined in

[api/types/bot.ts:37](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L37)

---

### stopLossPercentage

• `Optional` **stopLossPercentage**: `number`

#### Inherited from

Numerify.stopLossPercentage

#### Defined in

[api/types/bot.ts:18](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L18)

---

### stopLossTimeoutEnabled

• `Optional` **stopLossTimeoutEnabled**: `boolean`

#### Inherited from

Numerify.stopLossTimeoutEnabled

#### Defined in

[api/types/bot.ts:31](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L31)

---

### stopLossTimeoutInSeconds

• `Optional` **stopLossTimeoutInSeconds**: `number`

#### Inherited from

Numerify.stopLossTimeoutInSeconds

#### Defined in

[api/types/bot.ts:32](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L32)

---

### stopLossType

• `Optional` **stopLossType**: `"stop_loss"` \| `"stop_loss_and_disable_bot"`

#### Inherited from

Numerify.stopLossType

#### Defined in

[api/types/bot.ts:38](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L38)

---

### strategy

• `Optional` **strategy**: [`Strategy`](../README.md#strategy)

#### Inherited from

Numerify.strategy

#### Defined in

[api/types/bot.ts:23](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L23)

---

### strategyList

• **strategyList**: `Convert`\<[`StrategyRawDto`](../README.md#strategyrawdto), `number`\>[]

#### Inherited from

Numerify.strategyList

#### Defined in

[api/types/bot.ts:26](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L26)

---

### takeProfit

• **takeProfit**: `number`

#### Inherited from

Numerify.takeProfit

#### Defined in

[api/types/bot.ts:11](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L11)

---

### takeProfitType

• **takeProfitType**: `"base"` \| `"total"`

#### Inherited from

Numerify.takeProfitType

#### Defined in

[api/types/bot.ts:25](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L25)

---

### trailingDeviation

• `Optional` **trailingDeviation**: `number`

#### Inherited from

Numerify.trailingDeviation

#### Defined in

[api/types/bot.ts:21](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L21)

---

### trailingEnabled

• `Optional` **trailingEnabled**: `null` \| `boolean`

#### Inherited from

Numerify.trailingEnabled

#### Defined in

[api/types/bot.ts:20](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L20)

---

### tslEnabled

• `Optional` **tslEnabled**: `boolean`

#### Inherited from

Numerify.tslEnabled

#### Defined in

[api/types/bot.ts:34](https://github.com/ozum/3commas/blob/d6773ef/src/api/types/bot.ts#L34)

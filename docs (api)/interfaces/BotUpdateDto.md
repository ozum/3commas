[3commas](../README.md) / BotUpdateDto

# Interface: BotUpdateDto

## Hierarchy

- [`Numerify`](../README.md#numerify)\<`BotBaseDto`\>

  ↳ **`BotUpdateDto`**

## Table of contents

### Properties

- [activeSafetyOrdersCount](BotUpdateDto.md#activesafetyorderscount)
- [allowedDealsOnSamePair](BotUpdateDto.md#alloweddealsonsamepair)
- [baseOrderVolume](BotUpdateDto.md#baseordervolume)
- [baseOrderVolumeType](BotUpdateDto.md#baseordervolumetype)
- [btcPriceLimit](BotUpdateDto.md#btcpricelimit)
- [closeDealsTimeout](BotUpdateDto.md#closedealstimeout)
- [closeStrategyList](BotUpdateDto.md#closestrategylist)
- [cooldown](BotUpdateDto.md#cooldown)
- [dealStartDelaySeconds](BotUpdateDto.md#dealstartdelayseconds)
- [disableAfterDealsCount](BotUpdateDto.md#disableafterdealscount)
- [id](BotUpdateDto.md#id)
- [leverageCustomValue](BotUpdateDto.md#leveragecustomvalue)
- [leverageType](BotUpdateDto.md#leveragetype)
- [martingaleStepCoefficient](BotUpdateDto.md#martingalestepcoefficient)
- [martingaleVolumeCoefficient](BotUpdateDto.md#martingalevolumecoefficient)
- [maxActiveDeals](BotUpdateDto.md#maxactivedeals)
- [maxPrice](BotUpdateDto.md#maxprice)
- [maxPricePercentage](BotUpdateDto.md#maxpricepercentage)
- [maxSafetyOrders](BotUpdateDto.md#maxsafetyorders)
- [minPrice](BotUpdateDto.md#minprice)
- [minPricePercentage](BotUpdateDto.md#minpricepercentage)
- [minProfitPercentage](BotUpdateDto.md#minprofitpercentage)
- [minProfitType](BotUpdateDto.md#minprofittype)
- [minVolumeBtc24h](BotUpdateDto.md#minvolumebtc24h)
- [name](BotUpdateDto.md#name)
- [pairs](BotUpdateDto.md#pairs)
- [profitCurrency](BotUpdateDto.md#profitcurrency)
- [reinvestedVolumeUsd](BotUpdateDto.md#reinvestedvolumeusd)
- [reinvestingPercentage](BotUpdateDto.md#reinvestingpercentage)
- [riskReductionPercentage](BotUpdateDto.md#riskreductionpercentage)
- [safetyOrderStepPercentage](BotUpdateDto.md#safetyordersteppercentage)
- [safetyOrderVolume](BotUpdateDto.md#safetyordervolume)
- [safetyOrderVolumeType](BotUpdateDto.md#safetyordervolumetype)
- [startOrderType](BotUpdateDto.md#startordertype)
- [stopLossPercentage](BotUpdateDto.md#stoplosspercentage)
- [stopLossTimeoutEnabled](BotUpdateDto.md#stoplosstimeoutenabled)
- [stopLossTimeoutInSeconds](BotUpdateDto.md#stoplosstimeoutinseconds)
- [stopLossType](BotUpdateDto.md#stoplosstype)
- [strategy](BotUpdateDto.md#strategy)
- [strategyList](BotUpdateDto.md#strategylist)
- [takeProfit](BotUpdateDto.md#takeprofit)
- [takeProfitType](BotUpdateDto.md#takeprofittype)
- [trailingDeviation](BotUpdateDto.md#trailingdeviation)
- [trailingEnabled](BotUpdateDto.md#trailingenabled)
- [tslEnabled](BotUpdateDto.md#tslenabled)

## Properties

### activeSafetyOrdersCount

• **activeSafetyOrdersCount**: `number`

#### Inherited from

Numerify.activeSafetyOrdersCount

#### Defined in

api/types/bot.ts:17

---

### allowedDealsOnSamePair

• `Optional` **allowedDealsOnSamePair**: `null` \| `number`

#### Inherited from

Numerify.allowedDealsOnSamePair

#### Defined in

api/types/bot.ts:40

---

### baseOrderVolume

• **baseOrderVolume**: `number`

#### Inherited from

Numerify.baseOrderVolume

#### Defined in

api/types/bot.ts:9

---

### baseOrderVolumeType

• `Optional` **baseOrderVolumeType**: [`VolumeType`](../README.md#volumetype)

#### Inherited from

Numerify.baseOrderVolumeType

#### Defined in

api/types/bot.ts:10

---

### btcPriceLimit

• `Optional` **btcPriceLimit**: `number`

#### Inherited from

Numerify.btcPriceLimit

#### Defined in

api/types/bot.ts:22

---

### closeDealsTimeout

• `Optional` **closeDealsTimeout**: `null` \| `number`

#### Inherited from

Numerify.closeDealsTimeout

#### Defined in

api/types/bot.ts:41

---

### closeStrategyList

• `Optional` **closeStrategyList**: `Convert`\<`undefined` \| [`StrategyRawDto`](../README.md#strategyrawdto)[], `number`\>

#### Inherited from

Numerify.closeStrategyList

#### Defined in

api/types/bot.ts:44

---

### cooldown

• `Optional` **cooldown**: `number`

#### Inherited from

Numerify.cooldown

#### Defined in

api/types/bot.ts:19

---

### dealStartDelaySeconds

• `Optional` **dealStartDelaySeconds**: `null` \| `number`

#### Inherited from

Numerify.dealStartDelaySeconds

#### Defined in

api/types/bot.ts:35

---

### disableAfterDealsCount

• `Optional` **disableAfterDealsCount**: `null` \| `number`

#### Inherited from

Numerify.disableAfterDealsCount

#### Defined in

api/types/bot.ts:39

---

### id

• **id**: `number`

#### Defined in

api/types/bot.ts:81

---

### leverageCustomValue

• `Optional` **leverageCustomValue**: `null` \| `number`

#### Inherited from

Numerify.leverageCustomValue

#### Defined in

api/types/bot.ts:28

---

### leverageType

• `Optional` **leverageType**: `"isolated"` \| `"custom"` \| `"cross"` \| `"not_specified"`

#### Inherited from

Numerify.leverageType

#### Defined in

api/types/bot.ts:27

---

### martingaleStepCoefficient

• **martingaleStepCoefficient**: `number`

#### Inherited from

Numerify.martingaleStepCoefficient

#### Defined in

api/types/bot.ts:14

---

### martingaleVolumeCoefficient

• **martingaleVolumeCoefficient**: `number`

#### Inherited from

Numerify.martingaleVolumeCoefficient

#### Defined in

api/types/bot.ts:15

---

### maxActiveDeals

• `Optional` **maxActiveDeals**: `number`

#### Inherited from

Numerify.maxActiveDeals

#### Defined in

api/types/bot.ts:8

---

### maxPrice

• `Optional` **maxPrice**: `null` \| `number`

#### Inherited from

Numerify.maxPrice

#### Defined in

api/types/bot.ts:30

---

### maxPricePercentage

• `Optional` **maxPricePercentage**: `null` \| `number`

#### Inherited from

Numerify.maxPricePercentage

#### Defined in

api/types/bot.ts:49

---

### maxSafetyOrders

• **maxSafetyOrders**: `number`

#### Inherited from

Numerify.maxSafetyOrders

#### Defined in

api/types/bot.ts:16

---

### minPrice

• `Optional` **minPrice**: `null` \| `number`

#### Inherited from

Numerify.minPrice

#### Defined in

api/types/bot.ts:29

---

### minPricePercentage

• `Optional` **minPricePercentage**: `null` \| `number`

#### Inherited from

Numerify.minPricePercentage

#### Defined in

api/types/bot.ts:48

---

### minProfitPercentage

• `Optional` **minProfitPercentage**: `null` \| `number`

#### Inherited from

Numerify.minProfitPercentage

#### Defined in

api/types/bot.ts:42

---

### minProfitType

• `Optional` **minProfitType**: `null` \| `"base_order_volume"` \| `"total_bought_volume"`

#### Inherited from

Numerify.minProfitType

#### Defined in

api/types/bot.ts:43

---

### minVolumeBtc24h

• `Optional` **minVolumeBtc24h**: `number`

#### Inherited from

Numerify.minVolumeBtc24h

#### Defined in

api/types/bot.ts:33

---

### name

• **name**: `string`

#### Inherited from

Numerify.name

#### Defined in

api/types/bot.ts:6

---

### pairs

• **pairs**: `string` \| `string`[]

#### Inherited from

Numerify.pairs

#### Defined in

api/types/bot.ts:7

---

### profitCurrency

• `Optional` **profitCurrency**: `"quote_currency"` \| `"base_currency"`

#### Inherited from

Numerify.profitCurrency

#### Defined in

api/types/bot.ts:36

---

### reinvestedVolumeUsd

• `Optional` **reinvestedVolumeUsd**: `null` \| `number`

#### Inherited from

Numerify.reinvestedVolumeUsd

#### Defined in

api/types/bot.ts:47

---

### reinvestingPercentage

• `Optional` **reinvestingPercentage**: `null` \| `number`

#### Inherited from

Numerify.reinvestingPercentage

#### Defined in

api/types/bot.ts:46

---

### riskReductionPercentage

• `Optional` **riskReductionPercentage**: `null` \| `number`

#### Inherited from

Numerify.riskReductionPercentage

#### Defined in

api/types/bot.ts:45

---

### safetyOrderStepPercentage

• **safetyOrderStepPercentage**: `number`

#### Inherited from

Numerify.safetyOrderStepPercentage

#### Defined in

api/types/bot.ts:24

---

### safetyOrderVolume

• **safetyOrderVolume**: `number`

#### Inherited from

Numerify.safetyOrderVolume

#### Defined in

api/types/bot.ts:12

---

### safetyOrderVolumeType

• `Optional` **safetyOrderVolumeType**: [`VolumeType`](../README.md#volumetype)

#### Inherited from

Numerify.safetyOrderVolumeType

#### Defined in

api/types/bot.ts:13

---

### startOrderType

• `Optional` **startOrderType**: `"limit"` \| `"market"`

#### Inherited from

Numerify.startOrderType

#### Defined in

api/types/bot.ts:37

---

### stopLossPercentage

• `Optional` **stopLossPercentage**: `number`

#### Inherited from

Numerify.stopLossPercentage

#### Defined in

api/types/bot.ts:18

---

### stopLossTimeoutEnabled

• `Optional` **stopLossTimeoutEnabled**: `boolean`

#### Inherited from

Numerify.stopLossTimeoutEnabled

#### Defined in

api/types/bot.ts:31

---

### stopLossTimeoutInSeconds

• `Optional` **stopLossTimeoutInSeconds**: `number`

#### Inherited from

Numerify.stopLossTimeoutInSeconds

#### Defined in

api/types/bot.ts:32

---

### stopLossType

• `Optional` **stopLossType**: `"stop_loss"` \| `"stop_loss_and_disable_bot"`

#### Inherited from

Numerify.stopLossType

#### Defined in

api/types/bot.ts:38

---

### strategy

• `Optional` **strategy**: [`Strategy`](../README.md#strategy)

#### Inherited from

Numerify.strategy

#### Defined in

api/types/bot.ts:23

---

### strategyList

• **strategyList**: `Convert`\<[`StrategyRawDto`](../README.md#strategyrawdto), `number`\>[]

#### Inherited from

Numerify.strategyList

#### Defined in

api/types/bot.ts:26

---

### takeProfit

• **takeProfit**: `number`

#### Inherited from

Numerify.takeProfit

#### Defined in

api/types/bot.ts:11

---

### takeProfitType

• **takeProfitType**: `"base"` \| `"total"`

#### Inherited from

Numerify.takeProfitType

#### Defined in

api/types/bot.ts:25

---

### trailingDeviation

• `Optional` **trailingDeviation**: `number`

#### Inherited from

Numerify.trailingDeviation

#### Defined in

api/types/bot.ts:21

---

### trailingEnabled

• `Optional` **trailingEnabled**: `null` \| `boolean`

#### Inherited from

Numerify.trailingEnabled

#### Defined in

api/types/bot.ts:20

---

### tslEnabled

• `Optional` **tslEnabled**: `boolean`

#### Inherited from

Numerify.tslEnabled

#### Defined in

api/types/bot.ts:34
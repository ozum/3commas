[3commas](../README.md) / Bot

# Class: Bot

## Table of contents

### Constructors

- [constructor](Bot.md#constructor)

### Properties

- [#data](Bot.md##data)
- [#dirtyChecker](Bot.md##dirtychecker)
- [#root](Bot.md##root)

### Accessors

- [#client](Bot.md##client)
- [accountId](Bot.md#accountid)
- [accountName](Bot.md#accountname)
- [activeDealsCount](Bot.md#activedealscount)
- [activeDealsUsdProfit](Bot.md#activedealsusdprofit)
- [activeSafetyOrdersCount](Bot.md#activesafetyorderscount)
- [allowedDealsOnSamePair](Bot.md#alloweddealsonsamepair)
- [baseOrderVolume](Bot.md#baseordervolume)
- [baseOrderVolumeType](Bot.md#baseordervolumetype)
- [btcPriceLimit](Bot.md#btcpricelimit)
- [closeDealsTimeout](Bot.md#closedealstimeout)
- [closeStrategyList](Bot.md#closestrategylist)
- [cooldown](Bot.md#cooldown)
- [createdAt](Bot.md#createdat)
- [dealStartDelaySeconds](Bot.md#dealstartdelayseconds)
- [dealsCounter](Bot.md#dealscounter)
- [deletable](Bot.md#deletable)
- [disableAfterDealsCount](Bot.md#disableafterdealscount)
- [easyFormSupported](Bot.md#easyformsupported)
- [finishedDealsCount](Bot.md#finisheddealscount)
- [finishedDealsProfitUsd](Bot.md#finisheddealsprofitusd)
- [id](Bot.md#id)
- [isEnabled](Bot.md#isenabled)
- [leverageCustomValue](Bot.md#leveragecustomvalue)
- [leverageType](Bot.md#leveragetype)
- [martingaleStepCoefficient](Bot.md#martingalestepcoefficient)
- [martingaleVolumeCoefficient](Bot.md#martingalevolumecoefficient)
- [maxActiveDeals](Bot.md#maxactivedeals)
- [maxPrice](Bot.md#maxprice)
- [maxPricePercentage](Bot.md#maxpricepercentage)
- [maxSafetyOrders](Bot.md#maxsafetyorders)
- [minPrice](Bot.md#minprice)
- [minPricePercentage](Bot.md#minpricepercentage)
- [minProfitPercentage](Bot.md#minprofitpercentage)
- [minProfitType](Bot.md#minprofittype)
- [minVolumeBtc24H](Bot.md#minvolumebtc24h)
- [name](Bot.md#name)
- [pairs](Bot.md#pairs)
- [profitCurrency](Bot.md#profitcurrency)
- [reinvestedVolumeUsd](Bot.md#reinvestedvolumeusd)
- [reinvestingPercentage](Bot.md#reinvestingpercentage)
- [riskReductionPercentage](Bot.md#riskreductionpercentage)
- [safetyOrderStepPercentage](Bot.md#safetyordersteppercentage)
- [safetyOrderVolume](Bot.md#safetyordervolume)
- [safetyOrderVolumeType](Bot.md#safetyordervolumetype)
- [startOrderType](Bot.md#startordertype)
- [stopLossPercentage](Bot.md#stoplosspercentage)
- [stopLossTimeoutEnabled](Bot.md#stoplosstimeoutenabled)
- [stopLossTimeoutInSeconds](Bot.md#stoplosstimeoutinseconds)
- [stopLossType](Bot.md#stoplosstype)
- [strategy](Bot.md#strategy)
- [strategyList](Bot.md#strategylist)
- [takeProfit](Bot.md#takeprofit)
- [takeProfitType](Bot.md#takeprofittype)
- [tempId](Bot.md#tempid)
- [trailingDeviation](Bot.md#trailingdeviation)
- [trailingEnabled](Bot.md#trailingenabled)
- [tslEnabled](Bot.md#tslenabled)
- [type](Bot.md#type)
- [updatedAt](Bot.md#updatedat)
- [urlSecret](Bot.md#urlsecret)

### Methods

- [#replaceData](Bot.md##replacedata)
- [delete](Bot.md#delete)
- [getAccount](Bot.md#getaccount)
- [save](Bot.md#save)
- [setOrderVolumes](Bot.md#setordervolumes)
- [start](Bot.md#start)
- [stop](Bot.md#stop)
- [update](Bot.md#update)
- [calculateOrderVolumes](Bot.md#calculateordervolumes)

## Constructors

### constructor

• **new Bot**(`root`, `data`): [`Bot`](Bot.md)

#### Parameters

| Name   | Type                                            |
| :----- | :---------------------------------------------- |
| `root` | [`ThreeCommas`](ThreeCommas.md)                 |
| `data` | [`BotCreateDto`](../interfaces/BotCreateDto.md) |

#### Returns

[`Bot`](Bot.md)

#### Defined in

bot.ts:15

## Properties

### #data

• `Private` **#data**: `Convert`\<[`BotRawDto`](../interfaces/BotRawDto.md), `number`\>

#### Defined in

bot.ts:12

---

### #dirtyChecker

• `Private` **#dirtyChecker**: `DirtyChecker`\<`Convert`\<[`BotRawDto`](../interfaces/BotRawDto.md), `number`\>\>

#### Defined in

bot.ts:13

---

### #root

• `Private` `Readonly` **#root**: [`ThreeCommas`](ThreeCommas.md)

#### Defined in

bot.ts:11

## Accessors

### #client

• `get` **#client**(): [`Client`](Client.md)\<`true`\>

#### Returns

[`Client`](Client.md)\<`true`\>

#### Defined in

bot.ts:21

---

### accountId

• `get` **accountId**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:140

---

### accountName

• `get` **accountName**(): `string`

#### Returns

`string`

#### Defined in

bot.ts:484

• `set` **accountName**(`accountName`): `void`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `accountName` | `string` |

#### Returns

`void`

#### Defined in

bot.ts:488

---

### activeDealsCount

• `get` **activeDealsCount**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:200

• `set` **activeDealsCount**(`activeDealsCount`): `void`

#### Parameters

| Name               | Type     |
| :----------------- | :------- |
| `activeDealsCount` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:204

---

### activeDealsUsdProfit

• `get` **activeDealsUsdProfit**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:540

• `set` **activeDealsUsdProfit**(`activeDealsUsdProfit`): `void`

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `activeDealsUsdProfit` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:544

---

### activeSafetyOrdersCount

• `get` **activeSafetyOrdersCount**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:160

• `set` **activeSafetyOrdersCount**(`activeSafetyOrdersCount`): `void`

#### Parameters

| Name                      | Type     |
| :------------------------ | :------- |
| `activeSafetyOrdersCount` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:164

---

### allowedDealsOnSamePair

• `get` **allowedDealsOnSamePair**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:276

• `set` **allowedDealsOnSamePair**(`allowedDealsOnSamePair`): `void`

#### Parameters

| Name                     | Type               |
| :----------------------- | :----------------- |
| `allowedDealsOnSamePair` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:280

---

### baseOrderVolume

• `get` **baseOrderVolume**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:332

• `set` **baseOrderVolume**(`baseOrderVolume`): `void`

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `baseOrderVolume` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:336

---

### baseOrderVolumeType

• `get` **baseOrderVolumeType**(): [`VolumeType`](../README.md#volumetype)

#### Returns

[`VolumeType`](../README.md#volumetype)

#### Defined in

bot.ts:476

• `set` **baseOrderVolumeType**(`baseOrderVolumeType`): `void`

#### Parameters

| Name                  | Type                                    |
| :-------------------- | :-------------------------------------- |
| `baseOrderVolumeType` | [`VolumeType`](../README.md#volumetype) |

#### Returns

`void`

#### Defined in

bot.ts:480

---

### btcPriceLimit

• `get` **btcPriceLimit**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:412

• `set` **btcPriceLimit**(`btcPriceLimit`): `void`

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `btcPriceLimit` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:416

---

### closeDealsTimeout

• `get` **closeDealsTimeout**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:292

• `set` **closeDealsTimeout**(`closeDealsTimeout`): `void`

#### Parameters

| Name                | Type               |
| :------------------ | :----------------- |
| `closeDealsTimeout` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:296

---

### closeStrategyList

• `get` **closeStrategyList**(): `Convert`\<[`StrategyRawDto`](../README.md#strategyrawdto), `number`\>[]

#### Returns

`Convert`\<[`StrategyRawDto`](../README.md#strategyrawdto), `number`\>[]

#### Defined in

bot.ts:184

• `set` **closeStrategyList**(`closeStrategyList`): `void`

#### Parameters

| Name                | Type                                                                     |
| :------------------ | :----------------------------------------------------------------------- |
| `closeStrategyList` | `Convert`\<[`StrategyRawDto`](../README.md#strategyrawdto), `number`\>[] |

#### Returns

`void`

#### Defined in

bot.ts:188

---

### cooldown

• `get` **cooldown**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:404

• `set` **cooldown**(`cooldown`): `void`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `cooldown` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:408

---

### createdAt

• `get` **createdAt**(): `string`

#### Returns

`string`

#### Defined in

bot.ts:212

---

### dealStartDelaySeconds

• `get` **dealStartDelaySeconds**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:236

• `set` **dealStartDelaySeconds**(`dealStartDelaySeconds`): `void`

#### Parameters

| Name                    | Type               |
| :---------------------- | :----------------- |
| `dealStartDelaySeconds` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:240

---

### dealsCounter

• `get` **dealsCounter**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:268

• `set` **dealsCounter**(`dealsCounter`): `void`

#### Parameters

| Name           | Type               |
| :------------- | :----------------- |
| `dealsCounter` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:272

---

### deletable

• `get` **deletable**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

bot.ts:208

---

### disableAfterDealsCount

• `get` **disableAfterDealsCount**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:260

• `set` **disableAfterDealsCount**(`disableAfterDealsCount`): `void`

#### Parameters

| Name                     | Type               |
| :----------------------- | :----------------- |
| `disableAfterDealsCount` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:264

---

### easyFormSupported

• `get` **easyFormSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

bot.ts:284

• `set` **easyFormSupported**(`easyFormSupported`): `void`

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `easyFormSupported` | `boolean` |

#### Returns

`void`

#### Defined in

bot.ts:288

---

### finishedDealsCount

• `get` **finishedDealsCount**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:508

• `set` **finishedDealsCount**(`finishedDealsCount`): `void`

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `finishedDealsCount` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:512

---

### finishedDealsProfitUsd

• `get` **finishedDealsProfitUsd**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:500

• `set` **finishedDealsProfitUsd**(`finishedDealsProfitUsd`): `void`

#### Parameters

| Name                     | Type     |
| :----------------------- | :------- |
| `finishedDealsProfitUsd` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:504

---

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:127

---

### isEnabled

• `get` **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

bot.ts:144

• `set` **isEnabled**(`isEnabled`): `void`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `isEnabled` | `boolean` |

#### Returns

`void`

#### Defined in

bot.ts:148

---

### leverageCustomValue

• `get` **leverageCustomValue**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:524

• `set` **leverageCustomValue**(`leverageCustomValue`): `void`

#### Parameters

| Name                  | Type               |
| :-------------------- | :----------------- |
| `leverageCustomValue` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:528

---

### leverageType

• `get` **leverageType**(): `"isolated"` \| `"custom"` \| `"cross"` \| `"not_specified"`

#### Returns

`"isolated"` \| `"custom"` \| `"cross"` \| `"not_specified"`

#### Defined in

bot.ts:516

• `set` **leverageType**(`leverageType`): `void`

#### Parameters

| Name           | Type                                                         |
| :------------- | :----------------------------------------------------------- |
| `leverageType` | `"isolated"` \| `"custom"` \| `"cross"` \| `"not_specified"` |

#### Returns

`void`

#### Defined in

bot.ts:520

---

### martingaleStepCoefficient

• `get` **martingaleStepCoefficient**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:388

• `set` **martingaleStepCoefficient**(`martingaleStepCoefficient`): `void`

#### Parameters

| Name                        | Type     |
| :-------------------------- | :------- |
| `martingaleStepCoefficient` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:392

---

### martingaleVolumeCoefficient

• `get` **martingaleVolumeCoefficient**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:380

• `set` **martingaleVolumeCoefficient**(`martingaleVolumeCoefficient`): `void`

#### Parameters

| Name                          | Type     |
| :---------------------------- | :------- |
| `martingaleVolumeCoefficient` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:384

---

### maxActiveDeals

• `get` **maxActiveDeals**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:192

• `set` **maxActiveDeals**(`maxActiveDeals`): `void`

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `maxActiveDeals` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:196

---

### maxPrice

• `get` **maxPrice**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:452

• `set` **maxPrice**(`maxPrice`): `void`

#### Parameters

| Name       | Type               |
| :--------- | :----------------- |
| `maxPrice` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:456

---

### maxPricePercentage

• `get` **maxPricePercentage**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:580

• `set` **maxPricePercentage**(`maxPricePercentage`): `void`

#### Parameters

| Name                 | Type               |
| :------------------- | :----------------- |
| `maxPricePercentage` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:584

---

### maxSafetyOrders

• `get` **maxSafetyOrders**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:152

• `set` **maxSafetyOrders**(`maxSafetyOrders`): `void`

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `maxSafetyOrders` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:156

---

### minPrice

• `get` **minPrice**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:444

• `set` **minPrice**(`minPrice`): `void`

#### Parameters

| Name       | Type               |
| :--------- | :----------------- |
| `minPrice` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:448

---

### minPricePercentage

• `get` **minPricePercentage**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:572

• `set` **minPricePercentage**(`minPricePercentage`): `void`

#### Parameters

| Name                 | Type               |
| :------------------- | :----------------- |
| `minPricePercentage` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:576

---

### minProfitPercentage

• `get` **minProfitPercentage**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:324

• `set` **minProfitPercentage**(`minProfitPercentage`): `void`

#### Parameters

| Name                  | Type               |
| :-------------------- | :----------------- |
| `minProfitPercentage` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:328

---

### minProfitType

• `get` **minProfitType**(): `null` \| `"base_order_volume"` \| `"total_bought_volume"`

#### Returns

`null` \| `"base_order_volume"` \| `"total_bought_volume"`

#### Defined in

bot.ts:364

• `set` **minProfitType**(`minProfitType`): `void`

#### Parameters

| Name            | Type                                                       |
| :-------------- | :--------------------------------------------------------- |
| `minProfitType` | `null` \| `"base_order_volume"` \| `"total_bought_volume"` |

#### Returns

`void`

#### Defined in

bot.ts:368

---

### minVolumeBtc24H

• `get` **minVolumeBtc24H**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:428

• `set` **minVolumeBtc24H**(`minVolumeBtc24h`): `void`

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `minVolumeBtc24h` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:432

---

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

bot.ts:308

• `set` **name**(`name`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`void`

#### Defined in

bot.ts:312

---

### pairs

• `get` **pairs**(): `string` \| `string`[]

#### Returns

`string` \| `string`[]

#### Defined in

bot.ts:168

• `set` **pairs**(`pairs`): `void`

#### Parameters

| Name    | Type                   |
| :------ | :--------------------- |
| `pairs` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

bot.ts:172

---

### profitCurrency

• `get` **profitCurrency**(): `"quote_currency"` \| `"base_currency"`

#### Returns

`"quote_currency"` \| `"base_currency"`

#### Defined in

bot.ts:436

• `set` **profitCurrency**(`profitCurrency`): `void`

#### Parameters

| Name             | Type                                    |
| :--------------- | :-------------------------------------- |
| `profitCurrency` | `"quote_currency"` \| `"base_currency"` |

#### Returns

`void`

#### Defined in

bot.ts:440

---

### reinvestedVolumeUsd

• `get` **reinvestedVolumeUsd**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:564

• `set` **reinvestedVolumeUsd**(`reinvestedVolumeUsd`): `void`

#### Parameters

| Name                  | Type               |
| :-------------------- | :----------------- |
| `reinvestedVolumeUsd` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:568

---

### reinvestingPercentage

• `get` **reinvestingPercentage**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:548

• `set` **reinvestingPercentage**(`reinvestingPercentage`): `void`

#### Parameters

| Name                    | Type               |
| :---------------------- | :----------------- |
| `reinvestingPercentage` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:552

---

### riskReductionPercentage

• `get` **riskReductionPercentage**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

bot.ts:556

• `set` **riskReductionPercentage**(`riskReductionPercentage`): `void`

#### Parameters

| Name                      | Type               |
| :------------------------ | :----------------- |
| `riskReductionPercentage` | `null` \| `number` |

#### Returns

`void`

#### Defined in

bot.ts:560

---

### safetyOrderStepPercentage

• `get` **safetyOrderStepPercentage**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:348

• `set` **safetyOrderStepPercentage**(`safetyOrderStepPercentage`): `void`

#### Parameters

| Name                        | Type     |
| :-------------------------- | :------- |
| `safetyOrderStepPercentage` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:352

---

### safetyOrderVolume

• `get` **safetyOrderVolume**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:340

• `set` **safetyOrderVolume**(`safetyOrderVolume`): `void`

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `safetyOrderVolume` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:344

---

### safetyOrderVolumeType

• `get` **safetyOrderVolumeType**(): [`VolumeType`](../README.md#volumetype)

#### Returns

[`VolumeType`](../README.md#volumetype)

#### Defined in

bot.ts:468

• `set` **safetyOrderVolumeType**(`safetyOrderVolumeType`): `void`

#### Parameters

| Name                    | Type                                    |
| :---------------------- | :-------------------------------------- |
| `safetyOrderVolumeType` | [`VolumeType`](../README.md#volumetype) |

#### Returns

`void`

#### Defined in

bot.ts:472

---

### startOrderType

• `get` **startOrderType**(): `"limit"` \| `"market"`

#### Returns

`"limit"` \| `"market"`

#### Defined in

bot.ts:532

• `set` **startOrderType**(`startOrderType`): `void`

#### Parameters

| Name             | Type                    |
| :--------------- | :---------------------- |
| `startOrderType` | `"limit"` \| `"market"` |

#### Returns

`void`

#### Defined in

bot.ts:536

---

### stopLossPercentage

• `get` **stopLossPercentage**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:396

• `set` **stopLossPercentage**(`stopLossPercentage`): `void`

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `stopLossPercentage` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:400

---

### stopLossTimeoutEnabled

• `get` **stopLossTimeoutEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

bot.ts:244

• `set` **stopLossTimeoutEnabled**(`stopLossTimeoutEnabled`): `void`

#### Parameters

| Name                     | Type      |
| :----------------------- | :-------- |
| `stopLossTimeoutEnabled` | `boolean` |

#### Returns

`void`

#### Defined in

bot.ts:248

---

### stopLossTimeoutInSeconds

• `get` **stopLossTimeoutInSeconds**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:252

• `set` **stopLossTimeoutInSeconds**(`stopLossTimeoutInSeconds`): `void`

#### Parameters

| Name                       | Type     |
| :------------------------- | :------- |
| `stopLossTimeoutInSeconds` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:256

---

### stopLossType

• `get` **stopLossType**(): `"stop_loss"` \| `"stop_loss_and_disable_bot"`

#### Returns

`"stop_loss"` \| `"stop_loss_and_disable_bot"`

#### Defined in

bot.ts:460

• `set` **stopLossType**(`stopLossType`): `void`

#### Parameters

| Name           | Type                                           |
| :------------- | :--------------------------------------------- |
| `stopLossType` | `"stop_loss"` \| `"stop_loss_and_disable_bot"` |

#### Returns

`void`

#### Defined in

bot.ts:464

---

### strategy

• `get` **strategy**(): [`Strategy`](../README.md#strategy)

#### Returns

[`Strategy`](../README.md#strategy)

#### Defined in

bot.ts:420

• `set` **strategy**(`strategy`): `void`

#### Parameters

| Name       | Type                                |
| :--------- | :---------------------------------- |
| `strategy` | [`Strategy`](../README.md#strategy) |

#### Returns

`void`

#### Defined in

bot.ts:424

---

### strategyList

• `get` **strategyList**(): `Convert`\<[`StrategyRawDto`](../README.md#strategyrawdto), `number`\>[]

#### Returns

`Convert`\<[`StrategyRawDto`](../README.md#strategyrawdto), `number`\>[]

#### Defined in

bot.ts:176

• `set` **strategyList**(`strategyList`): `void`

#### Parameters

| Name           | Type                                                                     |
| :------------- | :----------------------------------------------------------------------- |
| `strategyList` | `Convert`\<[`StrategyRawDto`](../README.md#strategyrawdto), `number`\>[] |

#### Returns

`void`

#### Defined in

bot.ts:180

---

### takeProfit

• `get` **takeProfit**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:316

• `set` **takeProfit**(`takeProfit`): `void`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `takeProfit` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:320

---

### takeProfitType

• `get` **takeProfitType**(): `"base"` \| `"total"`

#### Returns

`"base"` \| `"total"`

#### Defined in

bot.ts:356

• `set` **takeProfitType**(`takeProfitType`): `void`

#### Parameters

| Name             | Type                  |
| :--------------- | :-------------------- |
| `takeProfitType` | `"base"` \| `"total"` |

#### Returns

`void`

#### Defined in

bot.ts:360

---

### tempId

• `get` **tempId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

bot.ts:131

• `set` **tempId**(`tempId`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `tempId` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:135

---

### trailingDeviation

• `get` **trailingDeviation**(): `number`

#### Returns

`number`

#### Defined in

bot.ts:492

• `set` **trailingDeviation**(`trailingDeviation`): `void`

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `trailingDeviation` | `number` |

#### Returns

`void`

#### Defined in

bot.ts:496

---

### trailingEnabled

• `get` **trailingEnabled**(): `null` \| `boolean`

#### Returns

`null` \| `boolean`

#### Defined in

bot.ts:220

• `set` **trailingEnabled**(`trailingEnabled`): `void`

#### Parameters

| Name              | Type                |
| :---------------- | :------------------ |
| `trailingEnabled` | `null` \| `boolean` |

#### Returns

`void`

#### Defined in

bot.ts:224

---

### tslEnabled

• `get` **tslEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

bot.ts:228

• `set` **tslEnabled**(`tslEnabled`): `void`

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `tslEnabled` | `boolean` |

#### Returns

`void`

#### Defined in

bot.ts:232

---

### type

• `get` **type**(): `"Bot::MultiBot"` \| `"Bot::SingleBot"` \| `"Bot::SwitchBot"`

#### Returns

`"Bot::MultiBot"` \| `"Bot::SingleBot"` \| `"Bot::SwitchBot"`

#### Defined in

bot.ts:372

• `set` **type**(`type`): `void`

#### Parameters

| Name   | Type                                                          |
| :----- | :------------------------------------------------------------ |
| `type` | `"Bot::MultiBot"` \| `"Bot::SingleBot"` \| `"Bot::SwitchBot"` |

#### Returns

`void`

#### Defined in

bot.ts:376

---

### updatedAt

• `get` **updatedAt**(): `string`

#### Returns

`string`

#### Defined in

bot.ts:216

---

### urlSecret

• `get` **urlSecret**(): `string`

#### Returns

`string`

#### Defined in

bot.ts:300

• `set` **urlSecret**(`urlSecret`): `void`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `urlSecret` | `string` |

#### Returns

`void`

#### Defined in

bot.ts:304

## Methods

### #replaceData

▸ **#replaceData**(`data`): [`Bot`](Bot.md)

#### Parameters

| Name   | Type                                                             |
| :----- | :--------------------------------------------------------------- |
| `data` | `Convert`\<[`BotRawDto`](../interfaces/BotRawDto.md), `number`\> |

#### Returns

[`Bot`](Bot.md)

#### Defined in

bot.ts:85

---

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

bot.ts:112

---

### getAccount

▸ **getAccount**(): [`Account`](Account.md)

#### Returns

[`Account`](Account.md)

#### Defined in

bot.ts:123

---

### save

▸ **save**(`data?`): `Promise`\<[`Bot`](Bot.md)\>

#### Parameters

| Name    | Type                                                                          |
| :------ | :---------------------------------------------------------------------------- |
| `data?` | `Partial`\<`Convert`\<[`BotRawDto`](../interfaces/BotRawDto.md), `number`\>\> |

#### Returns

`Promise`\<[`Bot`](Bot.md)\>

#### Defined in

bot.ts:116

---

### setOrderVolumes

▸ **setOrderVolumes**(`options`): `void`

Sets base order volume and safety order volume for the given total percentage.
3Commas API accepts base volume and safety volume as a percentage of total capital.
There is no way to set total volume.
(For 100 USDT, and %50 base and %50 safety, 50 USDT is base and 50 USDT is safety.)
This method accepts total volume and distributes it between base order and safety order.
(For 100 USDT, and %50 base and %50 safety, 25 USDT is base and 25 USDT is safety.
We want to spend total of 50% USDT and give 50% of 50% to the safety.)

#### Parameters

| Name      | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| `options` | [`OrderVolumeOptions`](../interfaces/OrderVolumeOptions.md) |

#### Returns

`void`

#### Defined in

bot.ts:76

---

### start

▸ **start**(): `Promise`\<[`Bot`](Bot.md)\>

#### Returns

`Promise`\<[`Bot`](Bot.md)\>

#### Defined in

bot.ts:104

---

### stop

▸ **stop**(): `Promise`\<[`Bot`](Bot.md)\>

#### Returns

`Promise`\<[`Bot`](Bot.md)\>

#### Defined in

bot.ts:108

---

### update

▸ **update**(`data`): [`Bot`](Bot.md)

#### Parameters

| Name   | Type                                                                          |
| :----- | :---------------------------------------------------------------------------- |
| `data` | `Partial`\<`Convert`\<[`BotRawDto`](../interfaces/BotRawDto.md), `number`\>\> |

#### Returns

[`Bot`](Bot.md)

#### Defined in

bot.ts:93

---

### calculateOrderVolumes

▸ **calculateOrderVolumes**(`«destructured»`): `Object`

Calculates base order volume and safety order volume for the given total percentage.
3Commas API accepts base volume and safety volume as a percentage of total capital.
There is no way to set total volume.
(For 100 USDT, and %50 base and %50 safety, 50 USDT is base and 50 USDT is safety.)
This method accepts total volume and distributes it between base order and safety order.
(For 100 USDT, and %50 base and %50 safety, 25 USDT is base and 25 USDT is safety.
We want to spend total of 50% USDT and give 50% of 50% to the safety.)

#### Parameters

| Name             | Type                                                        |
| :--------------- | :---------------------------------------------------------- |
| `«destructured»` | [`OrderVolumeOptions`](../interfaces/OrderVolumeOptions.md) |

#### Returns

`Object`

volumes to be sent to 3Commas API.

| Name                    | Type                                    |
| :---------------------- | :-------------------------------------- |
| `baseOrderVolume`       | `number`                                |
| `baseOrderVolumeType`   | [`VolumeType`](../README.md#volumetype) |
| `safetyOrderVolume`     | `number`                                |
| `safetyOrderVolumeType` | [`VolumeType`](../README.md#volumetype) |

**`Example`**

```ts
Bot.calculateOrderVolumes(10, {
  safetyPercent: 50,
  safetyCount: 2,
  safetyVolumeScale: 1.3,
});
```

#### Defined in

bot.ts:44

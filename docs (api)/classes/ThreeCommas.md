[3commas](../README.md) / ThreeCommas

# Class: ThreeCommas

## Table of contents

### Constructors

- [constructor](ThreeCommas.md#constructor)

### Properties

- [#accounts](ThreeCommas.md##accounts)
- [#bots](ThreeCommas.md##bots)
- [#client](ThreeCommas.md##client)
- [#clientOptions](ThreeCommas.md##clientoptions)
- [#marketPairs](ThreeCommas.md##marketpairs)

### Accessors

- [accounts](ThreeCommas.md#accounts)
- [bots](ThreeCommas.md#bots)
- [client](ThreeCommas.md#client)

### Methods

- [#clearAccounts](ThreeCommas.md##clearaccounts)
- [createAndSaveAccount](ThreeCommas.md#createandsaveaccount)
- [createAndSaveBot](ThreeCommas.md#createandsavebot)
- [createBot](ThreeCommas.md#createbot)
- [deleteAccount](ThreeCommas.md#deleteaccount)
- [deleteBot](ThreeCommas.md#deletebot)
- [deleteBots](ThreeCommas.md#deletebots)
- [getAccount](ThreeCommas.md#getaccount)
- [getBot](ThreeCommas.md#getbot)
- [loadAccounts](ThreeCommas.md#loadaccounts)
- [loadBots](ThreeCommas.md#loadbots)
- [loadPairs](ThreeCommas.md#loadpairs)
- [saveBots](ThreeCommas.md#savebots)
- [#clearItems](ThreeCommas.md##clearitems)
- [#parseFilter](ThreeCommas.md##parsefilter)
- [getPairArrays](ThreeCommas.md#getpairarrays)
- [getPairObjects](ThreeCommas.md#getpairobjects)
- [getPairStrings](ThreeCommas.md#getpairstrings)
- [hasPair](ThreeCommas.md#haspair)
- [toPairArray](ThreeCommas.md#topairarray)
- [toPairObject](ThreeCommas.md#topairobject)
- [toPairString](ThreeCommas.md#topairstring)

## Constructors

### constructor

• **new ThreeCommas**(`options?`): [`ThreeCommas`](ThreeCommas.md)

#### Parameters

| Name      | Type                                                    |
| :-------- | :------------------------------------------------------ |
| `options` | `Omit`\<`ClientOptions`\<`true`\>, `"convertNumeric"`\> |

#### Returns

[`ThreeCommas`](ThreeCommas.md)

#### Defined in

[three-commas.ts:43](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L43)

## Properties

### #accounts

• `Private` **#accounts**: `Map`\<`number`, [`Account`](Account.md)\>

#### Defined in

[three-commas.ts:38](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L38)

---

### #bots

• `Private` **#bots**: `Map`\<`number`, [`Bot`](Bot.md)\>

#### Defined in

[three-commas.ts:39](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L39)

---

### #client

• `Private` `Optional` **#client**: [`Client`](Client.md)\<`true`\>

#### Defined in

[three-commas.ts:40](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L40)

---

### #clientOptions

• `Private` `Readonly` **#clientOptions**: `ClientOptions`\<`true`\>

#### Defined in

[three-commas.ts:41](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L41)

---

### #marketPairs

▪ `Static` `Private` **#marketPairs**: `Map`\<[`MarketCode`](../README.md#marketcode), `Set`\<`string`\>\>

#### Defined in

[three-commas.ts:36](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L36)

## Accessors

### accounts

• `get` **accounts**(): [`Account`](Account.md)[]

All loaded accounts.

#### Returns

[`Account`](Account.md)[]

#### Defined in

[three-commas.ts:111](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L111)

---

### bots

• `get` **bots**(): [`Bot`](Bot.md)[]

All loaded bots.

#### Returns

[`Bot`](Bot.md)[]

#### Defined in

[three-commas.ts:204](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L204)

---

### client

• `get` **client**(): [`Client`](Client.md)\<`true`\>

Lazily loaded 3Commas Client instance.

#### Returns

[`Client`](Client.md)\<`true`\>

#### Defined in

[three-commas.ts:48](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L48)

## Methods

### #clearAccounts

▸ **#clearAccounts**(`selector?`): `void`

Clears (unloads) accounts from memory and return their ids. Does NOT delete accounts in 3Commas.

#### Parameters

| Name        | Type                                  | Description                                                                                                 |
| :---------- | :------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| `selector?` | `Selector`\<[`Account`](Account.md)\> | is the id or select function to select items to delete. If undefined, all accounts are deleted from memory. |

#### Returns

`void`

#### Defined in

[three-commas.ts:337](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L337)

---

### createAndSaveAccount

▸ **createAndSaveAccount**(`params`): `Promise`\<[`Account`](Account.md)\>

Creates an account and saves it to the 3Commas server and loads it.

#### Parameters

| Name     | Type                                                    | Description                           |
| :------- | :------------------------------------------------------ | :------------------------------------ |
| `params` | [`AccountCreateDto`](../interfaces/AccountCreateDto.md) | are the parameters to create the bot. |

#### Returns

`Promise`\<[`Account`](Account.md)\>

the created bot.

#### Defined in

[three-commas.ts:81](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L81)

---

### createAndSaveBot

▸ **createAndSaveBot**(`params`): `Promise`\<[`Bot`](Bot.md)\>

Creates a bot and saves it to the 3Commas server. If account of the created bot is not loaded, throws error.

#### Parameters

| Name     | Type                                            | Description                           |
| :------- | :---------------------------------------------- | :------------------------------------ |
| `params` | [`BotCreateDto`](../interfaces/BotCreateDto.md) | are the parameters to create the bot. |

#### Returns

`Promise`\<[`Bot`](Bot.md)\>

the created bot.

**`Throws`**

Error if related account is not loaded.

#### Defined in

[three-commas.ts:162](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L162)

---

### createBot

▸ **createBot**(`params`): [`Bot`](Bot.md)

Creates a bot. If account of the created bot is not loaded, throws error. Default values may be different from
`createAndSaveBot` method, because `createAndSaveBot` saves the bot to the 3Commas server and gets the default
values from 3Commas.

#### Parameters

| Name     | Type                                            | Description                           |
| :------- | :---------------------------------------------- | :------------------------------------ |
| `params` | [`BotCreateDto`](../interfaces/BotCreateDto.md) | are the parameters to create the bot. |

#### Returns

[`Bot`](Bot.md)

the created bot.

**`Throws`**

Error if related account is not loaded.

#### Defined in

[three-commas.ts:148](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L148)

---

### deleteAccount

▸ **deleteAccount**(`idOrAccount`): `Promise`\<`void`\>

Deletes account from 3Commas.

#### Parameters

| Name          | Type                                |
| :------------ | :---------------------------------- |
| `idOrAccount` | `number` \| [`Account`](Account.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[three-commas.ts:92](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L92)

---

### deleteBot

▸ **deleteBot**(`botOrId`): `Promise`\<`void`\>

Deletes bot from 3Commas.

#### Parameters

| Name      | Type                        | Description                              |
| :-------- | :-------------------------- | :--------------------------------------- |
| `botOrId` | `number` \| [`Bot`](Bot.md) | is the id of the bot instance to delete. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[three-commas.ts:172](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L172)

---

### deleteBots

▸ **deleteBots**(`filter`): `Promise`\<`void` \| `void`[]\>

Deletes bots meeting the filter criteria.

#### Parameters

| Name     | Type                          | Description                                                                                   |
| :------- | :---------------------------- | :-------------------------------------------------------------------------------------------- |
| `filter` | `Selector`\<[`Bot`](Bot.md)\> | is either an id, or array of ids, or a filter function to filter bots after they were loaded. |

#### Returns

`Promise`\<`void` \| `void`[]\>

#### Defined in

[three-commas.ts:183](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L183)

---

### getAccount

▸ **getAccount**(`id`): [`Account`](Account.md)

Gets an account from loaded accounts.

#### Parameters

| Name | Type     | Description                  |
| :--- | :------- | :--------------------------- |
| `id` | `number` | is id of the account to get. |

#### Returns

[`Account`](Account.md)

the account.

#### Defined in

[three-commas.ts:104](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L104)

---

### getBot

▸ **getBot**(`id`): [`Bot`](Bot.md)

Gets a bot from loaded bots.

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `id` | `number` | is id of the bot to get. |

#### Returns

[`Bot`](Bot.md)

the bot.

#### Defined in

[three-commas.ts:197](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L197)

---

### loadAccounts

▸ **loadAccounts**(`params?`): `Promise`\<[`Account`](Account.md)[]\>

Loads accounts. Parameters are the 3Commas API query parameters and some additional parameters described below.

#### Parameters

| Name     | Type                                                                                                                                                                  |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params` | [`AccountQueryParams`](../interfaces/AccountQueryParams.md) & \{ `filter?`: `Selector`\<[`Account`](Account.md)\> ; `reload?`: `boolean` ; `replaceAll?`: `boolean` } |

#### Returns

`Promise`\<[`Account`](Account.md)[]\>

newly loaded accounts.

#### Defined in

[three-commas.ts:61](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L61)

---

### loadBots

▸ **loadBots**(`params?`): `Promise`\<[`Bot`](Bot.md)[]\>

Loads bots for currently loaded accounts. Parameters are the 3Commas API query parameters and some additional parameters described below.
If no accounts are loaded previously, loads all accounts first.

#### Parameters

| Name     | Type                                                                                                                         |
| :------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `params` | `Omit`\<[`BotQueryParams`](../interfaces/BotQueryParams.md), `"accountId"`\> & \{ `filter?`: `Selector`\<[`Bot`](Bot.md)\> } |

#### Returns

`Promise`\<[`Bot`](Bot.md)[]\>

newly loaded bots.

#### Defined in

[three-commas.ts:122](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L122)

---

### loadPairs

▸ **loadPairs**(`additionalMarketCodes?`): `Promise`\<`void`\>

Loads market pairs for currently loaded accounts.

#### Parameters

| Name                    | Type                                      | Default value |
| :---------------------- | :---------------------------------------- | :------------ |
| `additionalMarketCodes` | [`MarketCode`](../README.md#marketcode)[] | `[]`          |

#### Returns

`Promise`\<`void`\>

#### Defined in

[three-commas.ts:209](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L209)

---

### saveBots

▸ **saveBots**(): `Promise`\<`void`\>

Saves all dirty and unsaved bots.

#### Returns

`Promise`\<`void`\>

#### Defined in

[three-commas.ts:135](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L135)

---

### #clearItems

▸ **#clearItems**\<`T`\>(`items`, `selector?`): `number`[]

Clears (unloads) items from memory and return their ids. Does NOT delete items in 3Commas.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

#### Parameters

| Name        | Type                   | Description                                                                                              |
| :---------- | :--------------------- | :------------------------------------------------------------------------------------------------------- |
| `items`     | `Map`\<`number`, `T`\> | are the items to clear.                                                                                  |
| `selector?` | `Selector`\<`T`\>      | is the id or select function to select items to delete. If undefined, all items are deleted from memory. |

#### Returns

`number`[]

the ids of deleted items.

#### Defined in

[three-commas.ts:321](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L321)

---

### #parseFilter

▸ **#parseFilter**\<`T`\>(`selector?`): `Object`

Examines given selector and returns an `id` or a filter function.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

#### Parameters

| Name        | Type              | Description                                             |
| :---------- | :---------------- | :------------------------------------------------------ |
| `selector?` | `Selector`\<`T`\> | is either an id, or array of ids, or a filter function. |

#### Returns

`Object`

a single id if the selector is an id, or filter function if available.

| Name              | Type                      |
| :---------------- | :------------------------ |
| `filterFunction?` | `SelectorFunction`\<`T`\> |
| `id?`             | `number`                  |

**`Example`**

```ts
this.#parseFilter(1);            // { id: 1 }
this.#parseFilter([1]);          // { id: 1 }
this.#parseFilter([1, 2]);       // { filterFunction: (item) => { new Set([1, 2]).has(item.id) } }
this.#parseFilter(() => {...});  // { filterFunction: () => {...} }
```

#### Defined in

[three-commas.ts:303](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L303)

---

### getPairArrays

▸ **getPairArrays**(`marketCode`): [`PairArray`](../README.md#pairarray)[]

Gets pairs as arrays for a loaded account. If no account is loaded for the given market code, throws error.

#### Parameters

| Name         | Type                                    | Description                             |
| :----------- | :-------------------------------------- | :-------------------------------------- |
| `marketCode` | [`MarketCode`](../README.md#marketcode) | is the market code of a loaded account. |

#### Returns

[`PairArray`](../README.md#pairarray)[]

pairs.

**`Throws`**

error if no pairs are loaded for the given market code.

**`Example`**

```ts
const pairs = threeCommas.getPairsAsString("binance_futures"); // [["BTC", "USDT"], ["ETH", "USDT"], ...]
```

#### Defined in

[three-commas.ts:259](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L259)

---

### getPairObjects

▸ **getPairObjects**(`marketCode`): [`PairObject`](../interfaces/PairObject.md)[]

Gets pairs as objects for a loaded account. If no account is loaded for the given market code, throws error.

#### Parameters

| Name         | Type                                    | Description                             |
| :----------- | :-------------------------------------- | :-------------------------------------- |
| `marketCode` | [`MarketCode`](../README.md#marketcode) | is the market code of a loaded account. |

#### Returns

[`PairObject`](../interfaces/PairObject.md)[]

pairs.

**`Throws`**

error if no pairs are loaded for the given market code.

**`Example`**

```ts
const pairs = threeCommas.getPairsAsString("binance_futures"); // [{ base: "BTC", quote: "USDT" }, ...]
```

#### Defined in

[three-commas.ts:244](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L244)

---

### getPairStrings

▸ **getPairStrings**(`marketCode`): `string`[]

Gets pairs as strings for a loaded account. If no account is loaded for the given market code, throws error.

#### Parameters

| Name         | Type                                    | Description                             |
| :----------- | :-------------------------------------- | :-------------------------------------- |
| `marketCode` | [`MarketCode`](../README.md#marketcode) | is the market code of a loaded account. |

#### Returns

`string`[]

pairs.

**`Throws`**

error if no pairs are loaded for the given market code.

**`Example`**

```ts
const pairs = threeCommas.getPairsAsString("binance_futures"); // ['USDT_BTCUSDT', ...]
```

#### Defined in

[three-commas.ts:227](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L227)

---

### hasPair

▸ **hasPair**(`marketCode`, `pair`): `boolean`

Checks if given pair is available for the given market code.

#### Parameters

| Name         | Type                                    | Description                           |
| :----------- | :-------------------------------------- | :------------------------------------ |
| `marketCode` | [`MarketCode`](../README.md#marketcode) | is the market code to check pair for. |
| `pair`       | [`Pair`](../README.md#pair)             | is the pair to check.                 |

#### Returns

`boolean`

true if pair is available for the given market.

**`Throws`**

error if no pairs are loaded for the given market code.

#### Defined in

[three-commas.ts:272](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L272)

---

### toPairArray

▸ **toPairArray**(`marketCode`, `pair`): [`PairArray`](../README.md#pairarray)

#### Parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `marketCode` | [`MarketCode`](../README.md#marketcode) |
| `pair`       | [`Pair`](../README.md#pair)             |

#### Returns

[`PairArray`](../README.md#pairarray)

#### Defined in

[three-commas.ts:287](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L287)

---

### toPairObject

▸ **toPairObject**(`marketCode`, `pair`): [`PairObject`](../interfaces/PairObject.md)

#### Parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `marketCode` | [`MarketCode`](../README.md#marketcode) |
| `pair`       | [`Pair`](../README.md#pair)             |

#### Returns

[`PairObject`](../interfaces/PairObject.md)

#### Defined in

[three-commas.ts:283](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L283)

---

### toPairString

▸ **toPairString**(`marketCode`, `pair`): `string`

#### Parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `marketCode` | [`MarketCode`](../README.md#marketcode) |
| `pair`       | [`Pair`](../README.md#pair)             |

#### Returns

`string`

#### Defined in

[three-commas.ts:279](https://github.com/ozum/3commas/blob/154787b/src/three-commas.ts#L279)

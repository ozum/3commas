[3commas](../README.md) / BotQueryParams

# Interface: BotQueryParams

## Table of contents

### Properties

- [accountId](BotQueryParams.md#accountid)
- [formType](BotQueryParams.md#formtype)
- [from](BotQueryParams.md#from)
- [limit](BotQueryParams.md#limit)
- [offset](BotQueryParams.md#offset)
- [quote](BotQueryParams.md#quote)
- [scope](BotQueryParams.md#scope)
- [sortBy](BotQueryParams.md#sortby)
- [sortDirection](BotQueryParams.md#sortdirection)
- [strategy](BotQueryParams.md#strategy)

## Properties

### accountId

• `Optional` **accountId**: `number`

Account to show bots on. Return all if not specified. Gather this from GET /ver1/accounts

#### Defined in

[api/bot.ts:24](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L24)

---

### formType

• `Optional` **formType**: `"gordon"` \| `"advanced"`

Param for a filter by bot form type

#### Defined in

[api/bot.ts:32](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L32)

---

### from

• `Optional` **from**: `string`

Param for a filter by created date

#### Defined in

[api/bot.ts:22](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L22)

---

### limit

• `Optional` **limit**: `number`

#### Defined in

[api/bot.ts:19](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L19)

---

### offset

• `Optional` **offset**: `number`

#### Defined in

[api/bot.ts:20](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L20)

---

### quote

• `Optional` **quote**: `string`

Quote currency

#### Defined in

[api/bot.ts:30](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L30)

---

### scope

• `Optional` **scope**: `"enabled"` \| `"disabled"`

#### Defined in

[api/bot.ts:25](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L25)

---

### sortBy

• `Optional` **sortBy**: `"profit"` \| `"created_at"` \| `"updated_at"`

#### Defined in

[api/bot.ts:27](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L27)

---

### sortDirection

• `Optional` **sortDirection**: `"asc"` \| `"desc"`

#### Defined in

[api/bot.ts:28](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L28)

---

### strategy

• `Optional` **strategy**: [`Strategy`](../README.md#strategy)

#### Defined in

[api/bot.ts:26](https://github.com/ozum/3commas/blob/b88be19/src/api/bot.ts#L26)

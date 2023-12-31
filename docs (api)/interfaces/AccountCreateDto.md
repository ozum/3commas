[3commas](../README.md) / AccountCreateDto

# Interface: AccountCreateDto

## Hierarchy

- [`Numerify`](../README.md#numerify)\<`AccountBaseDto`\>

  ↳ **`AccountCreateDto`**

## Table of contents

### Properties

- [apiKey](AccountCreateDto.md#apikey)
- [customerId](AccountCreateDto.md#customerid)
- [includeInSummary](AccountCreateDto.md#includeinsummary)
- [name](AccountCreateDto.md#name)
- [passphrase](AccountCreateDto.md#passphrase)
- [secret](AccountCreateDto.md#secret)
- [subaccountName](AccountCreateDto.md#subaccountname)
- [type](AccountCreateDto.md#type)
- [typesToCreate](AccountCreateDto.md#typestocreate)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Inherited from

Numerify.apiKey

#### Defined in

api/types/account.ts:7

---

### customerId

• `Optional` **customerId**: `null` \| `string`

#### Inherited from

Numerify.customerId

#### Defined in

api/types/account.ts:8

---

### includeInSummary

• `Optional` **includeInSummary**: `boolean`

#### Inherited from

Numerify.includeInSummary

#### Defined in

api/types/account.ts:10

---

### name

• **name**: `string`

#### Inherited from

Numerify.name

#### Defined in

api/types/account.ts:6

---

### passphrase

• `Optional` **passphrase**: `string`

#### Defined in

api/types/account.ts:81

---

### secret

• `Optional` **secret**: `string`

#### Defined in

api/types/account.ts:80

---

### subaccountName

• `Optional` **subaccountName**: `null` \| `string`

#### Inherited from

Numerify.subaccountName

#### Defined in

api/types/account.ts:9

---

### type

• **type**: [`MarketCode`](../README.md#marketcode)

#### Defined in

api/types/account.ts:78

---

### typesToCreate

• `Optional` **typesToCreate**: [`MarketCode`](../README.md#marketcode)[]

#### Defined in

api/types/account.ts:79
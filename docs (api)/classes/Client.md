[3commas](../README.md) / Client

# Class: Client\<CN\>

A 3Commas client to interact with 3Commas API. Implements security rules explained in official API docs.
Provides a simple request method to access the API.

Static default client is used by API services if no client is provided as a parameter. Default client can be
set to a custom client. In this case API services uses the new default client if no client is passed as a parameter.

By default uses API key and secret from environment variables `THREE_COMMAS_API_KEY` and `THREE_COMMAS_API_SECRET`.

**`See`**

https://github.com/3commas-io/3commas-official-api-docs#signed--endpoint-security

**`Example`**

```ts
const client = new Client({ apiKey: "abc", apiSecret: "abc" });
const response = client.get("/ver1/bots", { limit: 100 });

const defaultClient = Client.defaultClient;
Client.defaultClient = new Client({ apiKey: "abc", apiSecret: "abc" }); //
```

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CN` | extends `boolean` = ``true`` | if `true` all numeric fields represented as a string in 3Commas API responses are converted to numbers. No conversion needed in requests. |

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [#apiKey](Client.md##apikey)
- [#apiSecret](Client.md##apisecret)
- [#convertNumeric](Client.md##convertnumeric)
- [#dry](Client.md##dry)
- [#forcedMode](Client.md##forcedmode)
- [logger](Client.md#logger)
- [#defaultClient](Client.md##defaultclient)

### Accessors

- [defaultClient](Client.md#defaultclient)

### Methods

- [#getSignature](Client.md##getsignature)
- [#getSignatureApiSecret](Client.md##getsignatureapisecret)
- [#getSignaturePrivateKey](Client.md##getsignatureprivatekey)
- [#request](Client.md##request)
- [delete](Client.md#delete)
- [get](Client.md#get)
- [patch](Client.md#patch)
- [post](Client.md#post)
- [#assertResponse](Client.md##assertresponse)
- [#createLogger](Client.md##createlogger)
- [#getRequestUrl](Client.md##getrequesturl)
- [#getSignatureUrl](Client.md##getsignatureurl)
- [#stringify](Client.md##stringify)

## Constructors

### constructor

• **new Client**\<`CN`\>(`«destructured»?`): [`Client`](Client.md)\<`CN`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CN` | extends `boolean` = ``true`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ClientOptions`\<`CN`\> |

#### Returns

[`Client`](Client.md)\<`CN`\>

#### Defined in

[api/client.ts:64](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L64)

## Properties

### #apiKey

• `Private` `Readonly` **#apiKey**: `string`

#### Defined in

[api/client.ts:57](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L57)

___

### #apiSecret

• `Private` `Readonly` **#apiSecret**: `string`

#### Defined in

[api/client.ts:58](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L58)

___

### #convertNumeric

• `Private` `Readonly` **#convertNumeric**: `boolean`

#### Defined in

[api/client.ts:61](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L61)

___

### #dry

• `Private` `Readonly` **#dry**: `boolean`

#### Defined in

[api/client.ts:60](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L60)

___

### #forcedMode

• `Private` `Readonly` **#forcedMode**: ``"real"`` \| ``"paper"``

#### Defined in

[api/client.ts:59](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L59)

___

### logger

• `Readonly` **logger**: `Logger`

#### Defined in

[api/client.ts:62](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L62)

___

### #defaultClient

▪ `Static` `Private` `Optional` **#defaultClient**: [`Client`](Client.md)\<``true``\>

#### Defined in

[api/client.ts:56](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L56)

## Accessors

### defaultClient

• `get` **defaultClient**(): [`Client`](Client.md)\<``true``\>

Lazily loaded static default Client.

#### Returns

[`Client`](Client.md)\<``true``\>

#### Defined in

[api/client.ts:88](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L88)

## Methods

### #getSignature

▸ **#getSignature**(`message`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[api/client.ts:185](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L185)

___

### #getSignatureApiSecret

▸ **#getSignatureApiSecret**(`message`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[api/client.ts:189](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L189)

___

### #getSignaturePrivateKey

▸ **#getSignaturePrivateKey**(`message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`string`

#### Defined in

[api/client.ts:199](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L199)

___

### #request

▸ **#request**\<`T`\>(`method`, `path`, `params?`): [`Response`](../README.md#response)\<`T`, `CN`\>

Requests data from the given 3Commas API URL path, using the given parameters and HTTP method.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `Method` | is the HTTP method. |
| `path` | `string` | is the path of the 3Commas API URL. |
| `params?` | `QueryParams` | are the parameters for the requested endpoint. |

#### Returns

[`Response`](../README.md#response)\<`T`, `CN`\>

data for the request.

**`Throws`**

Error if request fails or 3Commas responses with a 3Commas error.

#### Defined in

[api/client.ts:138](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L138)

___

### delete

▸ **delete**\<`T`\>(`path`, `params?`): `Promise`\<[`Data`](../README.md#data)\<`T`, `CN`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params?` | `QueryParams` |

#### Returns

`Promise`\<[`Data`](../README.md#data)\<`T`, `CN`\>\>

#### Defined in

[api/client.ts:101](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L101)

___

### get

▸ **get**\<`T`\>(`path`, `params?`): `Promise`\<[`Data`](../README.md#data)\<`T`, `CN`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params?` | `QueryParams` |

#### Returns

`Promise`\<[`Data`](../README.md#data)\<`T`, `CN`\>\>

#### Defined in

[api/client.ts:93](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L93)

___

### patch

▸ **patch**\<`T`\>(`path`, `params?`): `Promise`\<[`Data`](../README.md#data)\<`T`, `CN`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params?` | `QueryParams` |

#### Returns

`Promise`\<[`Data`](../README.md#data)\<`T`, `CN`\>\>

#### Defined in

[api/client.ts:105](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L105)

___

### post

▸ **post**\<`T`\>(`path`, `params?`): `Promise`\<[`Data`](../README.md#data)\<`T`, `CN`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params?` | `QueryParams` |

#### Returns

`Promise`\<[`Data`](../README.md#data)\<`T`, `CN`\>\>

#### Defined in

[api/client.ts:97](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L97)

___

### #assertResponse

▸ **#assertResponse**\<`T`\>(`data`, `method`, `path`, `params?`): `void`

Asserts that data is result of a successful request by throwing error if given data is a 3Commas error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ThreeCommasError`](../interfaces/ThreeCommasError.md) \| `T` | is the data to check. |
| `method` | `Method` | is the request method. |
| `path` | `string` | is the path of the request. |
| `params` | `QueryParams` | are the parameters sent to end point. |

#### Returns

`void`

**`Throws`**

Error if data is a 3Commas error.

#### Defined in

[api/client.ts:166](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L166)

___

### #createLogger

▸ **#createLogger**(`logLevel`, `logger?`): `Logger`

Returns logger to be used by this client.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `logLevel` | `LogLevel` | is the log level used by default logger. |
| `logger?` | `Logger` | is the custom logger. If provided created client use this custom logger. |

#### Returns

`Logger`

winston logger.

#### Defined in

[api/client.ts:116](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L116)

___

### #getRequestUrl

▸ **#getRequestUrl**(`method`, `url`, `params?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `Method` |
| `url` | `string` |
| `params?` | `QueryParams` |

#### Returns

`string`

#### Defined in

[api/client.ts:214](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L214)

___

### #getSignatureUrl

▸ **#getSignatureUrl**(`method`, `url`, `params?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `Method` |
| `url` | `string` |
| `params?` | `QueryParams` |

#### Returns

`string`

#### Defined in

[api/client.ts:208](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L208)

___

### #stringify

▸ **#stringify**(`data?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `string` \| `number` \| `string`[] \| `number`[]\> |

#### Returns

`string`

#### Defined in

[api/client.ts:180](https://github.com/ozum/3commas/blob/b3896a3/src/api/client.ts#L180)

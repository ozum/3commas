/* eslint-disable @typescript-eslint/no-unsafe-return */
import snakeCase from "just-snake-case";
import camelCase from "just-camel-case";
import type { SnakeCasedPropertiesDeep } from "type-fest";
import type { Stringify, Data } from "../index.js";

/**
 * 3Commas API returns some numeric floating numbers as strings. This function detects whether given data is a numeric string.
 *
 * @param input is the data to check.
 * @returns whether given data is a numeric string.
 */
function isNumeric(input: unknown): boolean {
  return typeof input === "string" && input !== "" && !Number.isNaN(Number(input));
}

/**
 * Returns a new object by by changing object's keys to camel case and (optionally) numeric string fields to numbers.
 * 3Commas API returns some numeric floating numbers as strings.
 *
 * @param dto is the data to convert.
 * @param convertNumeric if true numeric string fields are converted to numbers.
 * @returns converted data.
 */
export function toData<T, CN extends boolean>(dto: T | Stringify<T>, convertNumeric: CN): Data<T, CN> {
  if (Array.isArray(dto)) return dto.map((item) => toData(item, convertNumeric)) as Data<T, CN>;

  if (typeof dto === "object" && dto !== null)
    return Object.fromEntries(Object.entries(dto).map(([key, value]) => [camelCase(key), toData(value, convertNumeric)])) as Data<T, CN>;

  return (convertNumeric && isNumeric(dto) ? Number(dto) : dto) as Data<T, CN>;
}

/**
 * Returns a new object by by changing object's keys to snake case. 3Commas API responses contain some numeric string fields, but
 * in requests the same fields are expected as numbers. So no number to string conversion needed.
 *
 * @param dto is the data to convert.
 * @returns converted data.
 */
export function toDto<T>(data: T): SnakeCasedPropertiesDeep<T> {
  if (Array.isArray(data)) return data.map((item) => toDto(item)) as SnakeCasedPropertiesDeep<T>;

  if (typeof data === "object" && data !== null)
    return Object.fromEntries(Object.entries(data).map(([key, value]) => [snakeCase(key), toDto(value)])) as SnakeCasedPropertiesDeep<T>;

  return data as SnakeCasedPropertiesDeep<T>;
}

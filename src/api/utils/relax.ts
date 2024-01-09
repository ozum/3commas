import { RelaxValue, RelaxObject, RelaxInput, RelaxKey } from "../index.js";

/**
 * Returns primary value from parameter. Accepts value or object with required property.
 *
 * @param params is the value or object with value property
 * @returns the value.
 *
 * @example
 * getRelaxValue({ id: 3, name: "George" }, "id"); // 3
 * getRelaxValue(3, "id"); // 3
 */
export function getRelaxValue<T, K extends keyof T, R extends RelaxKey<T>>(params: RelaxInput<T, K>, key: R): RelaxValue<T, R> {
  return (typeof params === "object" && params !== null && key in params ? params[key as keyof object] : params) as RelaxValue<T, R>;
}

/**
 * Returns parameters. Accepts value or object. Converts value to objects if necessary.
 *
 * @param params is the value or object with value property
 * @returns the parameters object.
 *
 * @example
 * getRelaxObject({ id: 3, name: "George" }, "id"); // { id: 3, name: "George" }
 * getRelaxObject(3, "id"); // { id: 3 }
 */
export function getRelaxObject<T, K extends keyof T, R extends RelaxKey<T>>(params: RelaxInput<T, K>, key: R): RelaxObject<T, R> {
  return (typeof params === "object" && params !== null && key in params ? params : { [key]: params }) as RelaxObject<T, R>;
}

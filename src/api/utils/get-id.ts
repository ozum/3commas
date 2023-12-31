import { Id } from "../index.js";

/**
 * Returns id from parameter. Accepts number or object with id property.
 *
 * @param params is the id or object with id property
 * @returns the id.
 */
export function getId(params: Id): number {
  return typeof params === "number" ? params : params.id;
}

/** Generates a unique integer to use a temporary id for 3Commas items until they are saved. */
export function getUniqueInteger(): number {
  return Number.parseInt(`${Date.now()}${Math.floor(Math.random() * 100)}`, 10);
}

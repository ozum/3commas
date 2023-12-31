/**
 * Rounds given number into desired decimal length.
 *
 * @param number is the number to round.
 * @param decimal is the number of decimals required in the result.
 * @returns the rounded number.
 *
 * @example
 * round(9.9999999); // 10
 * round(9.26); // 9.26
 */
export function round(number: number, decimal = 2) {
  return Number.parseFloat(number.toFixed(decimal));
}

/**
 * It returns true if the given array has nested arrays.
 * @param {T[]} arr - T[] - the array we're checking
 */
export const hasNestedArrays = <T>(arr: T[]) =>
  Array.isArray(arr) && arr.some(item => Array.isArray(item));

/**
 * Return a random number between min and max.
 * @param {number} min - The minimum number that can be returned.
 * @param {number} max - The maximum number that can be generated.
 */
export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

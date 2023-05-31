/**
 * The function takes an optional array or string parameter and returns a concatenated string with
 * forward slashes as separators.
 * @param {T} [slug] - The `slug` parameter is an optional parameter that can be either an array of
 * strings or a single string. It is used as input to generate a URL slug. If `slug` is not provided,
 * the function will return an empty string.
 * @returns The function `getSlugFromParams` returns a string that is the concatenation of all the
 * elements in the `slug` array, separated by a forward slash (/). If `slug` is not an array or is
 * undefined, an empty string is returned.
 */
export const getSlugFromParams = <T extends string[] | string>(slug?: T) => {
  const path = (slug && Array.isArray(slug) && slug.join('/')) || '';

  return path;
};

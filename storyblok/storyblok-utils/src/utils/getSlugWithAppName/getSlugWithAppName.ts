import { env } from '@natu/env';

interface GetSlugWithAppNameInput {
  slug?: string;
}

/**
 * This function returns a string that concatenates the app name and a given slug.
 * @param {GetSlugWithAppNameInput}  - The function `getSlugWithAppName` takes an object as input with
 * a property `slug`. The `slug` property is a string representing a URL slug. The function
 * concatenates the `slug` with the value of the `NEXT_PUBLIC_STORYBLOK_APP_NAME` environment variable and
 * returns the resulting string.
 */
export const getSlugWithAppName = ({ slug }: GetSlugWithAppNameInput) =>
  slug
    ? `${env.NEXT_PUBLIC_STORYBLOK_APP_NAME}/${slug.replace('index', '')}`
    : env.NEXT_PUBLIC_STORYBLOK_APP_NAME;

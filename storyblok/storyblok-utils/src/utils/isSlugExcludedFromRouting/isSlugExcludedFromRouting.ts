import { env } from '@natu/env';

export const excludingSlugsFromRouting = env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS.split(',');

/**
 * This TypeScript function checks if a given slug is excluded from routing based on a list of excluded
 * slugs.
 * @param {string} slug - A string representing a URL slug, which is a part of a URL that identifies a
 * particular page or resource on a website. For example, in the URL
 * "https://example.com/blog/my-post", "blog/my-post" is the slug.
 */
export const isSlugExcludedFromRouting = (slug: string) =>
  excludingSlugsFromRouting.some(excludedSlug => slug.includes(excludedSlug));

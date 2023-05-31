import { env } from '@natu/env';
import { __DEV__ } from '@natu/utils';

/**
 * The function checks if the draft mode is enabled or if the environment is in development mode or if
 * the Storyblok token version is set to 'draft'.
 * @param {boolean} draftMode - A boolean value indicating whether the application is currently in
 * draft mode or not.
 */
export const isDraftMode = (draftMode: boolean) =>
  draftMode || __DEV__ || env.NEXT_PUBLIC_STORYBLOK_TOKEN_VERSION === 'draft';

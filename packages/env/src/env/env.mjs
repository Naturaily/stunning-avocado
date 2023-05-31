import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const skipValidation =
  !!process.env.SKIP_ENV_VALIDATION &&
  process.env.SKIP_ENV_VALIDATION !== 'false' &&
  process.env.SKIP_ENV_VALIDATION !== '0';

export const env = createEnv({
  skipValidation,
  server: {},
  client: {
    // Storyblok
    NEXT_PUBLIC_STORYBLOK_API_URL: z.string(),
    NEXT_PUBLIC_STORYBLOK_TOKEN: z.string(),
    NEXT_PUBLIC_STORYBLOK_APP_NAME: z.union([z.literal('app')], [z.literal('natu')]),
    NEXT_PUBLIC_STORYBLOK_TOKEN_VERSION: z
      .union([z.literal('draft'), z.literal('published')])
      .nullish(),
    NEXT_PUBLIC_STORYBLOK_NOT_FOUND_PATH: z.string(),
    NEXT_PUBLIC_STORYBLOK_HEADER_PATH: z.string(),
    NEXT_PUBLIC_STORYBLOK_FOOTER_PATH: z.string(),
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS: z.string(),

    NEXT_PUBLIC_APP_DOMAIN: z.string(),

    // Scripts
    NEXT_PUBLIC_GTM_ID: z.string().nullish(),
  },
  runtimeEnv: {
    // Storyblok
    NEXT_PUBLIC_STORYBLOK_API_URL: process.env.NEXT_PUBLIC_STORYBLOK_API_URL,
    NEXT_PUBLIC_STORYBLOK_TOKEN: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    NEXT_PUBLIC_STORYBLOK_APP_NAME: process.env.NEXT_PUBLIC_STORYBLOK_APP_NAME,
    NEXT_PUBLIC_STORYBLOK_TOKEN_VERSION: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN_VERSION,
    NEXT_PUBLIC_STORYBLOK_NOT_FOUND_PATH: process.env.NEXT_PUBLIC_STORYBLOK_NOT_FOUND_PATH,
    NEXT_PUBLIC_STORYBLOK_HEADER_PATH: process.env.NEXT_PUBLIC_STORYBLOK_HEADER_PATH,
    NEXT_PUBLIC_STORYBLOK_FOOTER_PATH: process.env.NEXT_PUBLIC_STORYBLOK_FOOTER_PATH,
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS: process.env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS,

    NEXT_PUBLIC_APP_DOMAIN: process.env.NEXT_PUBLIC_APP_DOMAIN,

    // Scripts
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  },
});

import { MetadataRoute } from 'next';

import { env } from '@natu/env';

export const Robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
  },
  sitemap: `https://${env.NEXT_PUBLIC_APP_DOMAIN}/sitemap.xml`,
});

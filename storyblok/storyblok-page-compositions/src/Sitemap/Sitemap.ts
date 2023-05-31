import { draftMode } from 'next/headers';

import { env } from '@natu/env';
import { getApi } from '@natu/storyblok-api';
import { excludingSlugsFromRouting, getSlugWithoutAppName } from '@natu/storyblok-utils';

const sitemapSkippedSlugs = excludingSlugsFromRouting;

const removeSlashFromEndOfUrl = (url: string) => url.replace(/\/$/, '');

const getValidUrl = (slug: string) => {
  const slugWithoutAppName = getSlugWithoutAppName(slug);

  return `https://${env.NEXT_PUBLIC_APP_DOMAIN}/${slugWithoutAppName}`;
};

export const Sitemap = async () => {
  const { isEnabled } = draftMode();
  const { getLinks } = getApi({ draftMode: isEnabled });

  const links = await getLinks({ startsWith: env.NEXT_PUBLIC_STORYBLOK_APP_NAME });

  const sitemapPages = links?.Links?.items.filter(
    ({ slug, isFolder }) =>
      !sitemapSkippedSlugs.find(skippedSlug => slug?.includes(skippedSlug)) && !isFolder,
  );

  const sanitizedSitemap = sitemapPages?.map(({ slug }) => ({
    url: removeSlashFromEndOfUrl(getValidUrl(slug || '')),
    lastModified: new Date(),
  }));

  return sanitizedSitemap;
};

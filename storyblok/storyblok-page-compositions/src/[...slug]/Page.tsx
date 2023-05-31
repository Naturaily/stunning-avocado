import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { env } from '@natu/env';
import { getApi, keys, queryClient } from '@natu/storyblok-api';
import {
  DynamicRender,
  excludingSlugsFromRouting,
  getMetaDataFromSB,
  getSlugWithAppName,
  getSlugWithoutAppName,
  isSlugExcludedFromRouting,
} from '@natu/storyblok-utils';

import { getSlugFromParams } from './utils/getSlugFromParams';

interface PageProps {
  params: {
    slug: string[];
  };
}

export const revalidate = 43200; // 12h

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const slug = getSlugWithAppName({ slug: getSlugFromParams(params.slug) });

  const { isEnabled } = draftMode();
  const { getContentNode } = getApi({ draftMode: isEnabled });

  const story = await getContentNode({ slug });
  const metadata = story?.ContentNode?.content?.seo;

  const { description, title } = getMetaDataFromSB(metadata);

  return {
    title: title || 'Default title',
    description: description || 'Default description',
  };
};

export const generateStaticParams = async () => {
  const { getLinks } = getApi({ draftMode: false });

  const data = await getLinks({ startsWith: env.NEXT_PUBLIC_STORYBLOK_APP_NAME });

  const sanitizedPaths = data?.Links?.items
    .filter(
      ({ slug, isFolder }) =>
        !excludingSlugsFromRouting.find(skippedSlug => slug?.includes(skippedSlug)) && !isFolder,
    )
    .map(({ slug }) => ({
      slug: getSlugWithoutAppName(slug).split('/').filter(Boolean),
    }))
    .filter(({ slug }) => slug.length > 0);

  return sanitizedPaths;
};

export const Page = async ({ params }: PageProps) => {
  const { isEnabled } = draftMode();
  const { getContentNode } = getApi({ draftMode: isEnabled });

  const slug = getSlugWithAppName({ slug: getSlugFromParams(params.slug) });

  if (isSlugExcludedFromRouting(slug)) {
    notFound();
  }

  const story = await getContentNode({ slug });
  await queryClient.prefetchQuery([keys.page, slug], () => story);
  const dehydratedState = dehydrate(queryClient);

  if (!story || !story?.ContentNode) {
    notFound();
  }

  return (
    <Hydrate state={dehydratedState}>
      <DynamicRender data={story?.ContentNode?.content} />
    </Hydrate>
  );
};

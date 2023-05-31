import { draftMode } from 'next/headers';

import { env } from '@natu/env';
import { getApi } from '@natu/storyblok-api';
import { DynamicRender, getSlugWithAppName } from '@natu/storyblok-utils';

export const NotFound = async () => {
  const { isEnabled } = draftMode();
  const { getContentNode } = getApi({ draftMode: isEnabled });

  const slug = getSlugWithAppName({ slug: env.NEXT_PUBLIC_STORYBLOK_NOT_FOUND_PATH });

  const story = await getContentNode({
    slug,
  });

  return <DynamicRender data={story.ContentNode?.content} />;
};

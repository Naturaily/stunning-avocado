import { ISbRichtext } from '@storyblok/react';
import { render, MARK_LINK, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';

import { markLink, nodeImage, defaultBlokResolver } from './components';

export const getStoryblokRichText = (data?: ISbRichtext) => {
  if (!data) {
    return null;
  }

  return render(data, {
    markResolvers: {
      [MARK_LINK]: markLink,
    },
    nodeResolvers: {
      [NODE_IMAGE]: nodeImage,
    },
    defaultBlokResolver,
  });
};

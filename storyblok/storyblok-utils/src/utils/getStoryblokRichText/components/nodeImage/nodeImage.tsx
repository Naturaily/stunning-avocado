import { ReactNode } from 'react';

import { ResponsiveImage } from '@natu/responsive-image';

import { StoryblokAsset } from '../../../../types';
import { getImagePropsFromStoryblok } from '../../../getImagePropsFromStoryblok';

interface NodeImageProps {
  alt?: string;
  title?: string;
  src?: string;
}

export const nodeImage = (_: ReactNode, { alt, src: imageSrc, title }: NodeImageProps) => {
  const storyblokImage = {
    alt,
    filename: imageSrc,
    title,
  } as StoryblokAsset;

  const image = getImagePropsFromStoryblok(storyblokImage);

  if (!image.src) {
    return null;
  }

  return <ResponsiveImage aspectRatio={[4, 3]} {...image} />;
};

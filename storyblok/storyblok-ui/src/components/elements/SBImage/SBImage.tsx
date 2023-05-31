import { AspectRatio, ResponsiveImage } from '@natu/responsive-image';
import {
  SBProps,
  StoryblokAsset,
  getImagePropsFromStoryblok,
  sbEditable,
} from '@natu/storyblok-utils';

type AspectRatioOption = '1x1' | '4x3' | '16x9' | '21x9';

const aspectRatios: Record<AspectRatioOption, AspectRatio> = {
  '1x1': [1, 1],
  '4x3': [4, 3],
  '16x9': [16, 9],
  '21x9': [21, 9],
};

interface SBImageProps {
  image?: StoryblokAsset;
  aspectRatio?: AspectRatioOption;
  priority?: boolean;
}

export const SBImage = ({ blok }: SBProps<SBImageProps>) => {
  const { image, aspectRatio, priority } = blok;

  const { alt, src, title } = getImagePropsFromStoryblok(image);

  if (!src) {
    return null;
  }

  const aspectRadioValue = aspectRatios[aspectRatio || '16x9'];

  return (
    <ResponsiveImage
      title={title}
      priority={priority}
      aspectRatio={aspectRadioValue}
      src={src}
      alt={alt}
      {...sbEditable(blok)}
    />
  );
};

import { ResponsiveImage } from '@natu/responsive-image';
import {
  SBProps,
  StoryblokAsset,
  getImagePropsFromStoryblok,
  sbEditable,
} from '@natu/storyblok-utils';
import { Typography } from '@natu/ui';

interface SBArticleProps {
  title?: string;
  description?: string;
  previewImage?: StoryblokAsset;
}

export const SBArticle = ({ blok }: SBProps<SBArticleProps>) => {
  const { title, previewImage, description } = blok;

  const { alt, src } = getImagePropsFromStoryblok(previewImage);

  return (
    <div {...sbEditable(blok)}>
      <div className="relative mx-auto mt-4 max-w-7xl px-4 lg:mt-10 xl:px-0">
        <div className="mb-4 flex max-w-3xl flex-col gap-4 lg:mb-10">
          <Typography component="h2" variant={['3xl', '5xl']}>
            {title}
          </Typography>
          <Typography variant="base">{description}</Typography>
        </div>
        {src && (
          <ResponsiveImage
            className="overflow-hidden rounded-2xl"
            src={src}
            alt={alt}
            aspectRatio={[21, 9]}
          />
        )}
      </div>
    </div>
  );
};

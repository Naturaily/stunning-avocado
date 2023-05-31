import { draftMode } from 'next/headers';

import { Link } from '@natu/next-link';
import { ResponsiveImage } from '@natu/responsive-image';
import { getApi } from '@natu/storyblok-api';
import {
  ContainerSizeVariant,
  MarginBottomVariant,
  MarginTopVariant,
  SBProps,
  getImagePropsFromStoryblok,
  getLinkPropsFromStoryblok,
  resolveStoryblokStyles,
  sbEditable,
} from '@natu/storyblok-utils';
import { Typography } from '@natu/ui';

interface SBRecentArticlesProps {
  count?: string;
  marginTop?: MarginTopVariant;
  marginBottom?: MarginBottomVariant;
  containerSize?: ContainerSizeVariant;
}

export const SBRecentArticles = async ({ blok }: SBProps<SBRecentArticlesProps>) => {
  const { count, marginTop, marginBottom, containerSize } = blok;

  const { isEnabled } = draftMode();
  const { getContentNodes } = getApi({ draftMode: isEnabled });

  const styles = resolveStoryblokStyles({
    containerSize: containerSize || 'screen-2xl',
    mb: marginBottom,
    mt: marginTop,
  });

  const data = await getContentNodes({
    perPage: Number(count),
    sortBy: 'first_published_at:desc',
    filterQuery: {
      component: {
        in: 'article',
      },
    },
  });

  const items = data?.ContentNodes?.items;

  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <div className={styles} {...sbEditable(blok)}>
      <ul className="grid-cols-responsive-fit grid gap-6">
        {items.map(item => {
          const { href } = getLinkPropsFromStoryblok(item?.full_slug);
          const { alt, src } = getImagePropsFromStoryblok(item?.content.previewImage);

          return (
            <li
              key={item?.id}
              className="list-none transition-transform hover:scale-105"
              {...sbEditable(item?.content)}
            >
              <Link className="flex flex-col gap-2" href={href}>
                {src && (
                  <ResponsiveImage
                    aspectRatio={[4, 3]}
                    src={src}
                    className="overflow-hidden rounded"
                    alt={alt || item?.content?.title}
                  />
                )}

                <Typography component="h3" variant="3xl">
                  {item?.content?.title}
                </Typography>
                <Typography>{item?.content?.description}</Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

import {
  BlokItem,
  DynamicRender,
  GridGapVariant,
  SBProps,
  resolveStoryblokStyles,
  sbEditable,
} from '@natu/storyblok-utils';

interface SBColumnProps {
  body?: BlokItem[];
  gap?: GridGapVariant;
}

export const SBColumn = ({ blok }: SBProps<SBColumnProps>) => {
  const { body, gap } = blok;

  const styles = resolveStoryblokStyles({
    gridGapVariant: gap,
    className: 'w-full flex flex-col',
  });

  return (
    <div className={styles} {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </div>
  );
};

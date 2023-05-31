import {
  BlokItem,
  ContainerSizeVariant,
  DynamicRender,
  GridGapVariant,
  GridVariant,
  MarginBottomVariant,
  MarginTopVariant,
  SBProps,
  resolveStoryblokStyles,
  sbEditable,
} from '@natu/storyblok-utils';

interface SBGridProps {
  body?: BlokItem[];
  variant?: GridVariant;
  containerSize?: ContainerSizeVariant;
  gap?: GridGapVariant;
  marginTop?: MarginTopVariant;
  marginBottom?: MarginBottomVariant;
}

export const SBGrid = ({ blok }: SBProps<SBGridProps>) => {
  const { body, variant, containerSize, gap, marginTop, marginBottom } = blok;

  const styles = resolveStoryblokStyles({
    containerSize: containerSize || 'screen-2xl',
    gridVariant: variant || 'responsive-fit',
    gridGapVariant: gap || 'md',
    mb: marginBottom,
    mt: marginTop,
  });

  return (
    <div className={styles} {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </div>
  );
};

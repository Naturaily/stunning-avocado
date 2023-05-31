import { cn } from '@natu/utils';

const containerVariants = {
  full: 'w-full',
  'screen-2xl': 'max-w-screen-2xl w-full mx-auto px-4 3xl:px-0',
  '6xl': 'max-w-6xl w-full mx-auto px-4 2xl:px-0',
  '3xl': 'max-w-3xl w-full mx-auto px-4 xl:px-0',
  xl: 'max-w-xl w-full mx-auto px-4 md:px-0',
};

export type ContainerSizeVariant = keyof typeof containerVariants;

const gridVariants = {
  'responsive-fit': 'grid grid-cols-responsive-fit',
};

export type GridVariant = keyof typeof gridVariants;

const gapVariants = {
  xs: 'gap-4', // [16px]
  sm: 'gap-4 lg:gap-8', // [16px ,'32px']
  md: 'gap-8 lg:gap-10', // [32px, 40px]
  lg: 'gap-20 lg:gap-24', // [80px, 96px]
  xl: 'gap-24 lg:gap-60', // [96px, 240px]
};

export type GridGapVariant = keyof typeof gapVariants;

const spacingBottomVariants = {
  sm: 'mb-2', // [8px]
  md: 'mb-4', //  [16px]
  lg: 'mb-6', // [24px]
  '9xl': 'mb-20', // [80px]
};

export type MarginBottomVariant = keyof typeof spacingBottomVariants;

const spacingTopVariants = {
  sm: 'mt-2', // [8px]
  md: 'mt-4', // [16px]
  lg: 'mt-6', // [24px]
  '9xl': 'mt-20', // [80px]
};

export type MarginTopVariant = keyof typeof spacingTopVariants;

// Func props
interface ResolveStoryblokStylesProps {
  containerSize?: ContainerSizeVariant;
  gridVariant?: GridVariant;
  gridGapVariant?: GridGapVariant;
  mt?: MarginTopVariant;
  mb?: MarginBottomVariant;
  className?: string;
}

export const resolveStoryblokStyles = ({
  containerSize,
  gridVariant,
  gridGapVariant,
  mt,
  mb,
  className,
}: ResolveStoryblokStylesProps) =>
  cn(
    containerSize && containerVariants[containerSize],
    gridVariant && gridVariants[gridVariant],
    gridGapVariant && gapVariants[gridGapVariant],
    mt && spacingTopVariants[mt],
    mb && spacingBottomVariants[mb],
    className,
  );

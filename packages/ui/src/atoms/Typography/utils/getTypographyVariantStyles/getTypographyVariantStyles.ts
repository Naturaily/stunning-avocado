import { cn, isArrayWithLength } from '@natu/utils';

import { TypographyVariant, TypographyVariantProp } from '../../Typography.type';

type VariantOptions = Record<TypographyVariant, string>;

export const typographyVariantsMobile: VariantOptions = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

const typographyVariantsTablet: VariantOptions = {
  xs: 'md:text-xs',
  sm: 'md:text-sm',
  base: 'md:text-base',
  lg: 'md:text-lg',
  xl: 'md:text-xl',
  '2xl': 'md:text-2xl',
  '3xl': 'md:text-3xl',
  '4xl': 'md:text-4xl',
  '5xl': 'md:text-5xl',
  '6xl': 'md:text-6xl',
};

const typographyVariantsDesktop: VariantOptions = {
  xs: 'lg:text-xs',
  sm: 'lg:text-sm',
  base: 'lg:text-base',
  lg: 'lg:text-lg',
  xl: 'lg:text-xl',
  '2xl': 'lg:text-2xl',
  '3xl': 'lg:text-3xl',
  '4xl': 'lg:text-4xl',
  '5xl': 'lg:text-5xl',
  '6xl': 'lg:text-6xl',
};

export const getTypographyVariantStyles = (variant?: TypographyVariantProp) => {
  if (typeof variant === 'string') {
    return cn(typographyVariantsMobile[variant]);
  }

  if (isArrayWithLength(variant)) {
    const [mobile, tablet, desktop] = variant;

    return cn(
      typographyVariantsMobile[mobile],
      tablet && typographyVariantsTablet[tablet],
      desktop && typographyVariantsDesktop[desktop],
    );
  }

  return 'text-inherit';
};

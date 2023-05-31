export type TypographyVariant =
  | 'base'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export type TypographyVariantProp =
  | TypographyVariant
  | [TypographyVariant, TypographyVariant?, TypographyVariant?];

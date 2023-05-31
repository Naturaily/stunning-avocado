import { ElementType } from 'react';

import { SBProps, sbEditable } from '@natu/storyblok-utils';
import { Typography, TypographyVariant } from '@natu/ui';

interface SBTypographyProps {
  text?: string;
  variant?: TypographyVariant;
  tag?: ElementType;
}

export const SBTypography = ({ blok }: SBProps<SBTypographyProps>) => {
  const { text, variant, tag } = blok;

  return (
    <Typography component={(tag || 'p') as any} variant={variant || 'base'} {...sbEditable(blok)}>
      {text}
    </Typography>
  );
};

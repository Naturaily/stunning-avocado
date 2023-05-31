import { ComponentProps, ElementType, ReactNode, forwardRef } from 'react';

import { cn } from '@natu/utils';

import { TypographyVariantProp } from './Typography.type';
import { getTypographyVariantStyles } from './utils/getTypographyVariantStyles';

export interface TypographyProps extends ComponentProps<'p'> {
  children?: ReactNode;
  variant?: TypographyVariantProp;
  component?: ElementType;
}

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ component, children, className, variant, ...rest }, ref) => {
    const typographyVariant = getTypographyVariantStyles(variant);

    const Component = component || 'p';
    const styles = cn(typographyVariant, className);

    return (
      <Component ref={ref} className={styles} {...rest}>
        {children}
      </Component>
    );
  },
);

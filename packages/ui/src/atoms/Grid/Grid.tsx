import { ComponentProps, ElementType, ReactNode, forwardRef } from 'react';

import { cn } from '@natu/utils';

export interface GridProps extends ComponentProps<'div'> {
  children?: ReactNode;
  component?: ElementType;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ component, children, className, ...rest }, ref) => {
    const styles = cn('grid grid-cols-12 md:grid-cols-24 xl:max-w-screen-2xl', className);

    const Component = component || 'div';

    return (
      <Component ref={ref} className={styles} {...rest}>
        {children}
      </Component>
    );
  },
);

import { ComponentProps, ReactNode } from 'react';

import { cn } from '@natu/utils';

export interface RichtextProps extends ComponentProps<'div'> {
  children?: ReactNode;
}

export const Richtext = ({ className, children, ...rest }: RichtextProps) => {
  const styles = cn('prose max-w-none', className);

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
};

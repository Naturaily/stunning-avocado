import { forwardRef } from 'react';

import { Link, LinkProps } from '@natu/next-link';
import { cn } from '@natu/utils';

export type AnchorProps = LinkProps;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, ...rest }, ref) => {
    const styles = cn('text-base inline-flex', 'hover:underline', className);

    return (
      <Link ref={ref} className={styles} {...rest}>
        {children}
      </Link>
    );
  },
);

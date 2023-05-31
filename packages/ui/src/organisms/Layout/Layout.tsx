import { ReactNode } from 'react';

import { cn } from '@natu/utils';

export interface LayoutProps {
  children?: ReactNode;
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
}

export const Layout = ({ children, className, header = null, footer = null }: LayoutProps) => {
  const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <div className={wrapperStyles}>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  );
};

/* eslint-disable react/no-array-index-key */
import { ElementType } from 'react';

import { Grid } from '@natu/ui';
import { cn } from '@natu/utils';

const COLS = 24;

const GridItems = Array(COLS)
  .fill('')
  .map((_, i) => (
    <div key={i} className="col-span-1 h-screen w-px bg-orange-400" style={{ opacity: '0.4' }}>
      {i + 1}
    </div>
  ));

interface Context {
  globals: {
    grid: 'show' | 'hide';
  };
}

export const GridDecorator = (Story: ElementType, { globals: { grid } }: Context) => {
  const isDecoratorVisible = grid === 'show';

  const fixedWrapperStyles = cn(
    'pointer-events-none fixed z-10 h-full w-full opacity-40',
    isDecoratorVisible ? 'inline' : 'hidden',
  );

  return (
    <>
      <div className={fixedWrapperStyles}>
        <div className="h-full w-full" style={{ width: '100%', height: '100%', padding: '16px' }}>
          <Grid className="h-full">{GridItems}</Grid>
        </div>
      </div>
      <div style={{ padding: '16px', paddingTop: isDecoratorVisible ? '42px' : '16px' }}>
        <Story />
      </div>
    </>
  );
};

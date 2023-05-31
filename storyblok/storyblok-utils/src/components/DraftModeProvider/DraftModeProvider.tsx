'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useMemo, createContext, ReactNode, useContext } from 'react';

import { cn } from '@natu/utils';

import { isDraftMode } from './utils';

interface PreviewModeProviderProps {
  draftMode?: boolean;
  children?: ReactNode;
}

interface PreviewModeContextProps {
  draftMode?: boolean;
}

const DraftModeContext = createContext<PreviewModeContextProps | undefined>(undefined);

/**
 * This is a TypeScript React function that provides a context for draft mode with a preview option.
 * @param {PreviewModeProviderProps}  - The `DraftModeProvider` component takes in two props:
 */
export const DraftModeProvider = ({ children, draftMode = false }: PreviewModeProviderProps) => {
  const isDraftModeEnabled = isDraftMode(draftMode);
  const data = useMemo(() => ({ draftMode: isDraftModeEnabled }), [isDraftModeEnabled]);
  const { push } = useRouter();
  const pathname = usePathname();

  const href = `/api/disable-draft?slug=${pathname}`;

  const infoStyles = cn(
    'absolute bottom-6 left-0 z-50 rounded bg-red-500/90 p-2 opacity-0 shadow-lg shadow-red-500/80 pointer-events-none',
    'transition-all group-hover:-translate-y-5 group-hover:opacity-100',
  );

  const handleClick = () => push(href);

  return (
    <>
      <DraftModeContext.Provider value={data}>{children}</DraftModeContext.Provider>
      {isDraftModeEnabled && (
        <button
          onClick={handleClick}
          className="group fixed bottom-4 right-4 z-50 rounded bg-red-500/90 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-red-500/80"
        >
          Draft mode!
          <span className={infoStyles}>Clicking on the button will disable the draft mode</span>
        </button>
      )}
    </>
  );
};

export const useDraftModeContext = () => {
  const context = useContext(DraftModeContext);

  if (context === undefined) {
    throw new Error('Hook useDraftModeContext must be used within a DraftModeProvider component');
  }

  return context;
};

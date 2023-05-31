'use client';

import { ReactNode } from 'react';

import { ReactQueryProvider } from '@natu/react-query-gql';
import { queryClient } from '@natu/storyblok-api';
import { DraftModeProvider } from '@natu/storyblok-utils';

interface ProvidersProps {
  children?: ReactNode;
  draftMode?: boolean;
}

export const Providers = ({ children, draftMode = false }: ProvidersProps) => (
  <ReactQueryProvider client={queryClient}>
    <DraftModeProvider draftMode={draftMode}>{children}</DraftModeProvider>
  </ReactQueryProvider>
);

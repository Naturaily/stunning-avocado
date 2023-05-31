# @natu/googletagmanager

This package makes it easy to add Google Tag Manager to your app.

## 🎯 Getting Started

1. Fill `NEXT_PUBLIC_GTM_ID` in your .env file
2. Add `<GoogleTagManagerScript/>` to your `Providers` file.

```tsx
'use client';

import { GoogleTagManagerScript } from '@natu/googletagmanager';
import { env } from '@natu/env';

interface ProvidersProps {
  children?: ReactNode;
  draftMode?: boolean;
}

export const Providers = ({ children, draftMode = false }: ProvidersProps) => (
  <ReactQueryProvider client={queryClient}>
    <GoogleTagManagerScript gtmID={env.NEXT_PUBLIC_GTM_ID} />
    <DraftModeProvider draftMode={draftMode}>{children}</DraftModeProvider>
  </ReactQueryProvider>
);
```

import 'tailwind-config/global.css';

import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';

import { env } from '@natu/env';
import { getApi } from '@natu/storyblok-api';
import { StoryblokProvider } from '@natu/storyblok-ui';
import { DynamicRender, getSlugWithAppName } from '@natu/storyblok-utils';
import { Layout } from '@natu/ui';
import { cn } from '@natu/utils';

import { Providers } from './Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = async ({ children }: RootLayoutProps) => {
  const { isEnabled } = draftMode();
  const { getContentNode } = getApi({ draftMode: isEnabled });

  const headerSlug = getSlugWithAppName({ slug: env.NEXT_PUBLIC_STORYBLOK_HEADER_PATH });
  const footerSlug = getSlugWithAppName({ slug: env.NEXT_PUBLIC_STORYBLOK_FOOTER_PATH });

  const headerData = await getContentNode({ slug: headerSlug });
  const footerData = await getContentNode({ slug: footerSlug });

  return (
    <html lang="en">
      <body className={cn(inter.variable, 'font-primary')} suppressHydrationWarning>
        <StoryblokProvider>
          <Providers draftMode={isEnabled}>
            <Layout
              header={<DynamicRender data={headerData.ContentNode?.content} />}
              footer={<DynamicRender data={footerData.ContentNode?.content} />}
            >
              <main>{children}</main>
            </Layout>
          </Providers>
        </StoryblokProvider>
      </body>
    </html>
  );
};

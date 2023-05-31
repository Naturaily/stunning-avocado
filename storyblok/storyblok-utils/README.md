# @natu/storyblok-utils

A package containing components and functions supporting work with a `storyblok CMS`

# 🎯 Getting Started

## Components

- **DraftModeProvider** - A component showing the current state of the application (draft, published). It also allows you to exit draft mode.

_Usage:_

In the server component, execute the `draftMode` function from `next/headers` to get information about the application context. Do it in the global place for the application, e.g. `layout.tsx`. Pass `isEnabled` as props to the `Providers` component.

```tsx
// RootLayout.tsx (server component)

import { ReactNode } from 'react';
import { draftMode } from 'next/headers';

import { StoryblokProvider } from '@natu/storyblok-ui';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = async ({ children }: RootLayoutProps) => {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body>
        <StoryblokProvider>
          <Providers draftMode={isEnabled}>
            <main>{children}</main>
          </Providers>
        </StoryblokProvider>
      </body>
    </html>
  );
};
```

In the `Providers` component import the `DraftModeProvider` component and pass the draft mode props

```tsx
// Providers.tsx

'use client';

import { ReactNode } from 'react';

import { DraftModeProvider } from '@natu/storyblok-utils';

interface ProvidersProps {
  children?: ReactNode;
  draftMode?: boolean;
}

export const Providers = ({ children, draftMode = false }: ProvidersProps) => (
  <DraftModeProvider draftMode={draftMode}>{children}</DraftModeProvider>
);
```

In the lower right corner, information about the application mode will be displayed. It is also a button that will disable draft mode in production mode.

**Draft mode will work in 3 cases:**

- Developer mode
- Storyblok preview
- The env value `NEXT_PUBLIC_STORYBLOK_TOKEN_VERSION` will be set to `draft`

==============================================

- **DynamicRender** - A component that can render other block story components (`blocks` field in the CMS panel)

```tsx
import { BlokItem, DynamicRender, SBProps, sbEditable } from '@natu/storyblok-utils';

interface SBPageProps {
  body?: BlokItem[]; // <- bloks field in Storyblok CMS
}

export const SBPage = ({ blok }: SBProps<SBPageProps>) => {
  const { body } = blok;

  return (
    <div {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </div>
  );
};
```

==============================================

## Auxiliary types & funcions

- **SBProps** - A generic type that returns the typed props of the component

It accepts 2 optional parameters

- component props
- component name (You don't always have to pass it on. It will be useful when making `guards`)

**Default:**

```tsx
import { SBProps, sbEditable } from '@natu/storyblok-utils';

interface SBMyStoryblokComponent {
  text?: string;
  description?: string;
}

export const MyStoryblokComponent = ({ blok }: SBProps<SBMyStoryblokComponent>) => {
  const { text, description } = blok; // valid
  //const {text, description,. image} = blok <- ts error - Property 'image' does not exist on type 'SBMyStoryblokComponent & SbComponentType<myStoryblokComponent>'

  // blok.component === 'string' <-- type

  return (
    <div {...sbEditable(blok)}>
      <h2>{text}</h2>
      <p>{description}</p>
    </div>
  );
};
```

**With second parametr:**

```tsx
// Storyblok component

import { SBProps, sbEditable } from '@natu/storyblok-utils';

interface SBMyStoryblokComponent {
  text?: string;
  description?: string;
}

export const MyStoryblokComponent = ({
  blok,
}: SBProps<SBMyStoryblokComponent, 'myStoryblokComponent '>) => {
  const { text, description } = blok;

  // blok.component === 'myStoryblokComponent'  <-- type

  return (
    <div {...sbEditable(blok)}>
      <h2>{text}</h2>
      <p>{description}</p>
    </div>
  );
};
```

==============================================

- **StoryblokAsset type & getImagePropsFromStoryblok function** - An interface describing the storyblock asset object and an auxiliary function that normalizes the data

```tsx
// Storyblok component

import { ResponsiveImage } from '@natu/responsive-image';
import {
  SBProps,
  StoryblokAsset,
  getImagePropsFromStoryblok,
  sbEditable,
} from '@natu/storyblok-utils';

interface SBImageProps {
  image?: StoryblokAsset; // <- image field in Storyblok CMS
}

export const SBImage = ({ blok }: SBProps<SBImageProps>) => {
  const { image } = blok;

  const { alt, src, title } = getImagePropsFromStoryblok(image);

  if (!src) {
    return null;
  }

  return (
    <ResponsiveImage
      title={title}
      aspectRatio={[16, 9]}
      src={src}
      alt={alt}
      {...sbEditable(blok)}
    />
  );
};
```

==============================================

- **StoryblokLink type & getLinkPropsFromStoryblok function** - Depending on what the user selects in the storyblok (`url link, internal link, emial`), a different object will be returned by the CMS next to the link field. This function normalizes it.

```tsx
// Storyblok component

import {
  SBProps,
  StoryblokLink,
  getLinkPropsFromStoryblok,
  sbEditable,
} from '@natu/storyblok-utils';
import { Anchor } from '@natu/ui';

interface SBLinkProps {
  label?: string;
  link?: StoryblokLink; //<- link field in Storyblok CMS
}

export const SBLink = ({ blok }: SBProps<SBLinkProps>) => {
  const { label, link } = blok;

  // Returns object with href, target options
  const linkProps = getLinkPropsFromStoryblok(link);

  return (
    <Anchor {...linkProps} {...sbEditable(blok)}>
      {label}
    </Anchor>
  );
};
```

==============================================

- **getSlugWithAppName** - A function that takes a slug from `next.js` and returns it with the application value (`env.NEXT_PUBLIC_STORYBLOK_APP_NAME`) appended.

```ts
const path = getSlugWithAppName({ slug: 'blog' }); // <- app/blog
const path2 = getSlugWithAppName({ slug: 'blog/article-1' }); // <- app/blog/article-1
```

We pass such a servant when it reads data from the CMS

==============================================

- **getSlugWithoutAppName** - A function that truncates the application prefix. In links we want to have a path without this prefix

```ts
const path = getSlugWithoutAppName('app/blog'); // <- /blog
const path2 = getSlugWithoutAppName('app/blog/article-1'); // <- /blog/article-1
```

==============================================

- **getMetaDataFromSB** - A function that normalizes data from the seo-metatags plugin

```tsx
// page.tsx | layout.tsx

import { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string[];
  };
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const slug = getSlugWithAppName({ slug: getSlugFromParams(params.slug) });

  const { isEnabled } = draftMode();
  const { getContentNode } = getApi({ draftMode: isEnabled });

  const story = await getContentNode({ slug });
  const metadata = story?.ContentNode?.content?.seo;

  const { description, title } = getMetaDataFromSB(metadata); // <- my function

  return {
    title: title || 'Default title',
    description: description || 'Default description',
  };
};
```

==============================================

- **getStoryblokRichText** - A function that normalizes `richtext` data from `Storyblok` and returns the appropriate components. It also supports the rendering of `custom components`.

```tsx
// Storyblok component

import { ISbRichtext } from '@storyblok/react';

import { SBProps, getStoryblokRichText, sbEditable } from '@natu/storyblok-utils';
import { Richtext } from '@natu/ui';

interface SBRichtextProps {
  content?: ISbRichtext; // <- richtext field in Storyblok CMS
}

export const SBRichtext = ({ blok }: SBProps<SBRichtextProps>) => {
  const { content } = blok;

  const richtextContent = getStoryblokRichText(content);

  if (!richtextContent) {
    return null;
  }

  return <Richtext {...sbEditable(blok)}>{richtextContent}</Richtext>;
};
```

==============================================

- **isSlugExcludedFromRouting** - A function that checks whether a given url is excluded from routing. If it is excluded it will return true. Excluded paths can be passed to an environment variable

```ts
process.env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS = 'configuration-a93cfcb3,other'; // string,string,string...
```

```tsx
import { notFound } from 'next/navigation';

const isExcluded = isSlugExcludedFromRouting('blog') // false
const isExcluded = isSlugExcludedFromRouting('configuration-a93cfcb3') // true
const isExcluded = isSlugExcludedFromRouting('blog/configuration-a93cfcb3') // true
const isExcluded = isSlugExcludedFromRouting('configuration-a93cfcb3/blog') // true

--
// slug comes from params
 if (isSlugExcludedFromRouting(slug)) {
    notFound();
  }

```

==============================================

- **resolveStoryblokStyles** - In storyblock applications, we use a datasource as one place for our reusable data. This is often used as eg max-width components. This function stores all this data and returns the appropriate styles based on the keys.

```tsx
// Storyblok component

import {
  BlokItem,
  ContainerSizeVariant,
  DynamicRender,
  GridGapVariant,
  GridVariant,
  MarginBottomVariant,
  MarginTopVariant,
  SBProps,
  resolveStoryblokStyles,
  sbEditable,
} from '@natu/storyblok-utils';

interface SBGridProps {
  body?: BlokItem[];
  variant?: GridVariant; // <- Value it comes from datasource.
  containerSize?: ContainerSizeVariant; // <- Value it comes from datasource.
  gap?: GridGapVariant; // <- Value it comes from datasource.
  marginTop?: MarginTopVariant; // <- Value it comes from datasource.
  marginBottom?: MarginBottomVariant; // <- Value it comes from datasource.
}

export const SBGrid = ({ blok }: SBProps<SBGridProps>) => {
  const { body, variant, containerSize, gap, marginTop, marginBottom } = blok;

  const styles = resolveStoryblokStyles({
    containerSize: containerSize || 'screen-2xl',
    gridVariant: variant || 'responsive-fit',
    gridGapVariant: gap || 'md',
    mb: marginBottom,
    mt: marginTop,
  });

  return (
    <div className={styles} {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </div>
  );
};
```

==============================================

- **sbEditable** - A feature that allows you to add a specific border for a storyblock. After clicking on such a component in the CMS, we will jump to it and we will be able to quickly edit it. **It must always be passed to the Storyblok**

```tsx
import { BlokItem, DynamicRender, SBProps, sbEditable } from '@natu/storyblok-utils';

interface SBPageProps {
  body?: BlokItem[];
}

export const SBPage = ({ blok }: SBProps<SBPageProps>) => {
  const { body } = blok;

  return (
    <div {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </div>
  );
};
```

==============================================

- **previewMiddleware** - Function run on `next js middleware`. It allows you to run draft mode

```ts
import type { NextMiddleware } from 'next/server';

import { previewMiddleware } from '@natu/storyblok-utils';

export const middleware: NextMiddleware = async request => previewMiddleware(request);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next|api|static|favicon.ico).*)',
  ],
};
```

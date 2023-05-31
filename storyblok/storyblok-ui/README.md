# @natu/storyblok-ui

Bundle containing all storyblock components.

## 🎯 Getting Started

1. Create a new component in the `src/components/element` or `src/components/contentTypes` folder if it is a content type. You can import components from the @natu/ui package here.

```tsx
// src/components/elements/SBCard/SBCard.tsx

import {
  BlokItem,
  DynamicRender,
  SBProps,
  sbEditable,
  StoryblokAsset,
  getImagePropsFromStoryblok,
  StoryblokLink,
  DynamicRender,
} from '@natu/storyblok-utils';
import { Anchor } from '@natu/ui';
import { AspectRatio, ResponsiveImage } from '@natu/responsive-image';

interface SBPageProps {
  title?: string;
  description?: string;
  image?: StoryblokAsset;
  link?: StoryblokLink;
  body?: BlokItem[];
}

export const SBCard = ({ blok }: SBProps<SBPageProps>) => {
  const { description, title, imag, link, body } = blok;

  const { alt, src, title } = getImagePropsFromStoryblok(image);
  const linkProps = getLinkPropsFromStoryblok(link);

  return (
    <Anchor {...sbEditable(blok)}>
      <h2>{title}</h2>
      <p>{description}</p>
      {src && <ResponsiveImage title={title} aspectRatio={[16, 9]} src={src} alt={alt} />}
      <DynamicRender data={body} />
    </Anchor>
  );
};
```

2. Import it into the `componentsMap` file.

```ts
// src/components/componentsMap

import { SBArticle, SBFooter, SBHeader, SBPage } from './contentTypes';
import {
  SBColumn,
  SBGrid,
  SBImage,
  SBLink,
  SBRecentArticles,
  SBRichtext,
  SBTypography,
  SBCard, // <-- my new component
} from './elements';

const elements = {
  typography: SBTypography,
  link: SBLink,
  image: SBImage,
  grid: SBGrid,
  column: SBColumn,
  richtext: SBRichtext,
  recentArticles: SBRecentArticles,
  card: SBCard, // <-- my new component
};

const contentTypes = {
  page: SBPage,
  article: SBArticle,
  footer: SBFooter,
  header: SBHeader,
};

export const componentsMap: Record<string, any> = {
  ...elements,
  ...contentTypes,
};
```

**The component will be visible if selected in CMS**

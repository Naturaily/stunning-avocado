# @natu/next-link

The package contains a wrapper for the `next image`. Use it instead of the usual image from `nextjs`

## 🎯 Getting Started

```tsx
// my custom component

import { ResponsiveImage, AspectRatio } from '@natu/responsive-image';

export interface ImageProps {
  src: string;
  alt: string;
  title: string;
  aspectRatio?: AspectRatio;
  description: string;
}

export const Card = ({ src, alt, aspectRatio = [16, 9] }: AnchorProps) => {
  if (!src) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <ResponsiveImage src={src} alt={alt} aspectRatio={aspectRatio} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
```

### AspectRatio prop

This is a prop that takes 3 different arguments:

- [16,9] - The component will render the image in 16/9 aspect ratio

```tsx
<ResponsiveImage src={src} alt={alt} aspectRatio={[16, 9]} />
```

- [[1,1], [4,3], [16,9]] - Responsive values. The right order of mobile, tablet, desktop

```tsx
<ResponsiveImage
  src={src}
  alt={alt}
  aspectRatio={[
    [1, 1],
    [4, 3],
    [16, 9],
  ]}
/>
```

- fill - A string value that corresponds to the [default nexjs image behavior](https://nextjs.org/docs/app/api-reference/components/image#fill)

```tsx
<ResponsiveImage src={src} alt={alt} aspectRatio="fill" />
```

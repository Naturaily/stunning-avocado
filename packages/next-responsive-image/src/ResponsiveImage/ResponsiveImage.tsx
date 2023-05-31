import Image, { ImageProps } from 'next/image';

import { cn } from '@natu/utils';

import { AspectRatioProp } from './ResponsiveImage.types';
import styles from './styles.module.css';
import { getResponsivePadding } from './utils';

export interface ResponsiveImageProps extends Omit<ImageProps, 'fill'> {
  aspectRatio?: AspectRatioProp;
}

export const ResponsiveImage = ({
  src,
  className,
  aspectRatio = [16, 9],
  ...imageProps
}: ResponsiveImageProps) => {
  if (aspectRatio === 'fill') {
    const fillWrapperStyles = cn('relative block h-full w-full', className);

    return (
      <span className={fillWrapperStyles}>
        <Image src={src} fill className="object-cover" {...imageProps} />
      </span>
    );
  }

  const responsiveAspectRatio = getResponsivePadding(aspectRatio);
  const responsiveWrapperStyles = cn(
    'responsive-aspect-ratio block relative w-full h-full',
    styles.responsiveImage,
    className,
  );

  return (
    <span style={{ ...responsiveAspectRatio }} className={responsiveWrapperStyles}>
      <Image src={src} fill className="object-cover" {...imageProps} />
    </span>
  );
};

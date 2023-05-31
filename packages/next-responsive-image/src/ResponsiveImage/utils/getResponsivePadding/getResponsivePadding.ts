import { CSSProperties } from 'react';

import { AspectRatio, ResponsiveAspectRatio } from '../../ResponsiveImage.types';
import { getStyleForAspectRatio } from '../getStyleForAspectRatio';

const hasNestedArraysAspectRatio = (arr: ResponsiveAspectRatio): arr is ResponsiveAspectRatio =>
  Array.isArray(arr) && arr.some(item => Array.isArray(item));

/**
 * It takes an aspect ratio and returns a CSS variable for each breakpoint
 * @param {ResponsiveAspectRatio} aspectRatio - ResponsiveAspectRatio
 * @returns A function that returns an object with three properties.
 */
export const getResponsivePadding = (aspectRatio: ResponsiveAspectRatio) => {
  if (hasNestedArraysAspectRatio(aspectRatio)) {
    const [mobile, tablet, desktop] = aspectRatio.map(
      item => getStyleForAspectRatio(item as AspectRatio).paddingBottom,
    );

    return {
      '--mobileAspectRatio': mobile,
      '--tabletAspectRatio': tablet || mobile,
      '--desktopAspectRatio': desktop || tablet || mobile,
    } as Record<string, CSSProperties>;
  }

  const { paddingBottom } = getStyleForAspectRatio(aspectRatio);

  return {
    '--mobileAspectRatio': paddingBottom,
    '--tabletAspectRatio': paddingBottom,
    '--desktopAspectRatio': paddingBottom,
  } as Record<string, CSSProperties>;
};

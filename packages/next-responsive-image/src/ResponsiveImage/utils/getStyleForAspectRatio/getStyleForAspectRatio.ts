import { AspectRatio } from '../../ResponsiveImage.types';

/**
 * It takes an aspect ratio, and returns a style object that can be used to make a container element
 * have that aspect ratio
 * @param {AspectRatio} aspectRatio - The aspect ratio of the image.
 * @returns An object with two properties: paddingBottom and position.
 */
export const getStyleForAspectRatio = (aspectRatio: AspectRatio) => {
  const [width, height] = aspectRatio;
  const paddingAspectValue = height / width;

  // Multiply the base by 1000 to get 3 decimal places. Also multiply by 100 to give us a percentage.
  const roundedPaddingAspectValuePercentage = Math.round(paddingAspectValue * 1000 * 100) / 1000;
  const paddingBottom = `${roundedPaddingAspectValuePercentage}%`;

  return {
    paddingBottom,
  };
};

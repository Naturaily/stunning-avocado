import { StoryblokAsset } from '../../types';

/**
 * This TypeScript function takes a StoryblokAsset object and returns an object with the image's
 * filename and alt attributes, or null values if the image is undefined or has no filename.
 * @param {StoryblokAsset} [image] - The image parameter is an optional object of type StoryblokAsset,
 * which represents an image asset in the Storyblok CMS. It contains information such as the filename
 * and alt text of the image.
 * @returns The function `getImagePropsFromStoryblok` returns an object with two properties: `src` and
 * `alt`. If the `image` parameter is not provided or if it doesn't have a `filename` property, both
 * `src` and `alt` properties will be set to `null`. Otherwise, `src` will be set to the value of
 * `image.filename` and `alt
 */
export const getImagePropsFromStoryblok = (image?: StoryblokAsset) => {
  if (!image || !image?.filename) {
    return {
      src: null,
      alt: null,
      title: null,
    };
  }

  return {
    src: image.filename,
    alt: image.alt,
    title: image.title,
  };
};

/* eslint-disable no-underscore-dangle */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { StoryblokComponent } from '@storyblok/react/rsc';

import { BlokItem } from '../../types';

interface StoryblokComponentsProps {
  data?: BlokItem | BlokItem[];
}

export const DynamicRender = ({ data }: StoryblokComponentsProps) => {
  if (!data) {
    return null;
  }

  if (Array.isArray(data)) {
    return (
      <>
        {data.map(blok => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </>
    );
  }

  return <StoryblokComponent key={data._uid} blok={data} />;
};

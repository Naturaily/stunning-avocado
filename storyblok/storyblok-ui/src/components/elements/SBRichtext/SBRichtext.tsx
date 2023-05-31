import { ISbRichtext } from '@storyblok/react';

import { SBProps, getStoryblokRichText, sbEditable } from '@natu/storyblok-utils';
import { Richtext } from '@natu/ui';

interface SBRichtextProps {
  content?: ISbRichtext;
}

export const SBRichtext = ({ blok }: SBProps<SBRichtextProps>) => {
  const { content } = blok;

  const richtextContent = getStoryblokRichText(content);

  if (!richtextContent) {
    return null;
  }

  return <Richtext {...sbEditable(blok)}>{richtextContent}</Richtext>;
};

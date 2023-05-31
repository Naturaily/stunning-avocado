import {
  SBProps,
  StoryblokLink,
  getLinkPropsFromStoryblok,
  sbEditable,
} from '@natu/storyblok-utils';
import { Anchor } from '@natu/ui';

interface SBLinkProps {
  label?: string;
  link?: StoryblokLink;
}

export const SBLink = ({ blok }: SBProps<SBLinkProps>) => {
  const { label, link } = blok;

  const linkProps = getLinkPropsFromStoryblok(link);

  return (
    <Anchor {...linkProps} {...sbEditable(blok)}>
      {label}
    </Anchor>
  );
};

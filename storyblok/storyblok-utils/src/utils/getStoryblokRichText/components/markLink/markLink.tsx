import { ReactNode } from 'react';

import { env } from '@natu/env';
import { Anchor } from '@natu/ui';

import { StoryblokLink } from '../../../../types';
import { getLinkPropsFromStoryblok } from '../../../getLinkPropsFromStoryblok';

interface MarkLinkProps {
  linktype?: string;
  href?: string;
  target?: string;
  anchor?: string;
  uuid?: string;
}

/**
 * This function creates a StoryblokLink object from provided props and returns an Anchor component
 * with link properties obtained from the StoryblokLink object.
 * @param {ReactNode} children - ReactNode, which is a type for any valid React child element, such as
 * a string, number, or JSX element.
 * @param {MarkLinkProps} props - The `props` parameter is an object that contains the following
 * properties:
 * @returns The `markLink` function returns a JSX element that renders an `Anchor` component with the
 * `linkProps` obtained from the `getLinkPropsFromStoryblok` function, and the `children` passed as a
 * parameter.
 */
export const markLink = (
  children: ReactNode,
  { linktype, href, target, anchor, uuid }: MarkLinkProps,
) => {
  const hrefWithoutAppFolder = href?.replace(`${env.NEXT_PUBLIC_STORYBLOK_APP_NAME}/`, '');

  const storyblokLink = {
    id: uuid,
    linktype,
    cached_url: hrefWithoutAppFolder,
    email: hrefWithoutAppFolder,
    url: hrefWithoutAppFolder,
    target,
    anchor,
  } as StoryblokLink;

  const linkProps = getLinkPropsFromStoryblok(storyblokLink);

  return <Anchor {...linkProps}>{children}</Anchor>;
};

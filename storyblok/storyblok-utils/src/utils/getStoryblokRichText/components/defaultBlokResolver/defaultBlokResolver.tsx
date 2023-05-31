// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { StoryblokComponent } from '@storyblok/react/rsc';

type ComponentProps = Record<string, unknown> & { _uid: string };

export const defaultBlokResolver = (component: string, props: ComponentProps) => {
  const blok = { ...props, component };

  // eslint-disable-next-line no-underscore-dangle
  return <StoryblokComponent blok={blok} key={props._uid} />;
};

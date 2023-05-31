import { BlokItem, DynamicRender, SBProps, sbEditable } from '@natu/storyblok-utils';

interface SBPageProps {
  body?: BlokItem[];
}

export const SBPage = ({ blok }: SBProps<SBPageProps, 'page'>) => {
  const { body } = blok;

  return (
    <div {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </div>
  );
};

import { SBProps, sbEditable } from '@natu/storyblok-utils';

interface SBFooterProps {
  copyright?: string;
}

export const SBFooter = ({ blok }: SBProps<SBFooterProps>) => {
  const { copyright } = blok;

  return (
    <footer className="bg-primary-500 flex items-center px-4 py-6" {...sbEditable(blok)}>
      <div className="mx-auto max-w-7xl text-white">{copyright}</div>
    </footer>
  );
};

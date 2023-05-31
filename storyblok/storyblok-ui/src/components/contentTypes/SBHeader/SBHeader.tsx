import { Link } from '@natu/next-link';
import { SBProps, sbEditable } from '@natu/storyblok-utils';

export const SBHeader = ({ blok }: SBProps) => (
  <header
    className="bg-primary-500 sticky top-0 z-10 flex items-center px-4 py-6"
    {...sbEditable(blok)}
  >
    <div className="mx-auto w-full max-w-7xl text-center text-white">
      <Link href="/">Home</Link>
    </div>
  </header>
);

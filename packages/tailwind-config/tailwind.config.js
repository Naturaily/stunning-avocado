/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  mode: 'jit',
  content: [
    // ui
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    // responsive image
    '../../packages/next-responsive-image/src/ResponsiveImage/ResponsiveImage.tsx',
    // storyblok ui
    '../../storyblok/storyblok-ui/src/components/**/*.{js,ts,jsx,tsx}',
    // storybook
    '../../apps/storybook-ui/src/decorators/**/*.{js,ts,jsx,tsx}',
    // storyblok utils
    '../../storyblok/storyblok-utils/src/components/**/*.{js,ts,jsx,tsx}',
    '../../storyblok/storyblok-utils/src/utils/getStoryblokRichText/**/*.{js,ts,jsx,tsx}',
    '../../storyblok/storyblok-utils/src/utils/resolveStoryblokStyles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
      colors: {
        primary: {
          500: '#581c87',
        },
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
        'responsive-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      gridColumnStart: {
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
      },
      gridColumnEnd: {
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

module.exports = tailwindConfig;

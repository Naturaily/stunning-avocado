import type { StorybookConfig } from '@storybook/nextjs';

export const rootConfig: Omit<StorybookConfig, 'stories'> = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

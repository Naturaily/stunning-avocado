import type { StorybookConfig } from '@storybook/nextjs';

import { rootConfig } from '@natu/storybook';

const config: StorybookConfig = {
  ...rootConfig,
  stories: [
    '../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/ui/src/**/*.stories.mdx',
  ],
  staticDirs: ['../static'],
  addons: [
    ...rootConfig.addons!,
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async config => {
    // @see: https://github.com/framer/motion/issues/1307
    config?.module?.rules?.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/,
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config?.resolve?.alias,
        },
      },
    };
  },
};

export default config;

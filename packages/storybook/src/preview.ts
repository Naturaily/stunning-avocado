import type { Preview } from '@storybook/react';

export const preview: Preview = {
  globalTypes: {
    grid: {
      name: 'Grid',
      description: 'Controls grid helper',
      defaultValue: 'hide',
      toolbar: {
        // https://storybook.js.org/docs/react/faq#what-icons-are-available-for-my-toolbar-or-my-addon
        icon: 'grid',
        dynamicTitle: true,
        items: [
          { value: 'show', title: 'Show', left: '✅' },
          { value: 'hide', title: 'Hide', left: '❌' },
        ],
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

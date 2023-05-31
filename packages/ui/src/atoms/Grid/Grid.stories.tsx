import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';

export default {
  title: 'Components/Atoms/Grid',
  component: Grid,
  args: {
    component: 'div',
  },
  argTypes: {
    component: {
      control: {
        type: 'select',
      },
      options: ['div', 'section', 'aside', 'article', 'main', 'header', 'footer'],
    },
    ref: {
      table: { disable: true },
    },
  },
  render: args => (
    <Grid {...args}>
      <div className="col-span-5 mt-24 bg-orange-500">col-span-5</div>
      <div className="col-span-5 col-start-7 mt-32 bg-green-500">col-span-5 col-start-7</div>
      <div className="col-span-full mt-52 bg-blue-500">col span full</div>
    </Grid>
  ),
} as Meta<typeof Grid>;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {};

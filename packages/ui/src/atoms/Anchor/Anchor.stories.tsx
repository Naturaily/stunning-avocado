import type { Meta, StoryObj } from '@storybook/react';

import { Anchor } from '.';

export default {
  title: 'Components/Atoms/Anchor',
  component: Anchor,
  args: {
    children: 'Anchor component',
    href: '/',
    animatedUnderline: false,
  },
  argTypes: {},
} as Meta<typeof Anchor>;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {};

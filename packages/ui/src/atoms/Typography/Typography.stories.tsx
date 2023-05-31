import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';
import { TypographyVariant } from './Typography.type';
import { typographyVariantsMobile } from './utils/getTypographyVariantStyles';

const allItems = Object.keys(typographyVariantsMobile) as TypographyVariant[];

export default {
  title: 'Components/Atoms/Typography',
  component: Typography,
  args: {
    children: 'Lorem ipsum dolor sit amet',
    component: 'p',
    variant: 'base',
  },
  argTypes: {
    component: {
      control: {
        type: 'select',
      },
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'strong'], // This is example. Can be an any tag
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
    },
    ref: {
      table: { disable: true },
    },
  },
} as Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const All: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
    component: {
      table: { disable: true },
    },
  },
  render: ({ children }) => (
    <div className="flex flex-col gap-4">
      {allItems.map(variant => (
        <Typography key={variant} variant={variant}>
          <span className="text-primary-500">{variant} &gt;</span> {children}
        </Typography>
      ))}
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    variant: ['xs', 'lg', '6xl'],
  },
};

export const XS: Story = {
  args: {
    variant: 'xs',
  },
};

export const SM: Story = {
  args: {
    variant: 'sm',
  },
};

export const Base: Story = {};

export const LG: Story = {
  args: {
    variant: 'lg',
  },
  name: 'lg',
};

export const XL2: Story = {
  args: {
    variant: '2xl',
  },
  name: '2xl',
};

export const XL3: Story = {
  args: {
    variant: '3xl',
  },
  name: '3xl',
};

export const XL4: Story = {
  args: {
    variant: '4xl',
  },
  name: '4xl',
};

export const XL5: Story = {
  args: {
    variant: '5xl',
  },
  name: '5xl',
};

export const XL6: Story = {
  args: {
    variant: '6xl',
  },
  name: '6xl',
};

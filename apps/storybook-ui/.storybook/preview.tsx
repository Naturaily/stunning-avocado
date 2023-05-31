import React from 'react';
// import { RouterContext } from 'next/dist/shared/lib/router-context';
import { preview } from '@natu/storybook';

import 'tailwind-config/global.css';

import * as NextImage from 'next/image';
import { GridDecorator } from '../src';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export default preview;

// This is the place responsible for grouping all decorators from the storybook app
export const decorators = [GridDecorator];

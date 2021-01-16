import React from 'react';
import LazyImage from '.';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Commons/LazyImage',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'black', value: '#000' },
      { name: 'white', value: '#fff' },
    ],
  },
};

export const Default = () => (
  <LazyImage src="/images/background.jpg" alt="Background" />
);

import { withKnobs } from '@storybook/addon-knobs';
import IconsList from './';
import React from 'react';

export default {
  title: 'Styleguide/Icons',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff' },
      { name: 'black', value: '#000' },
    ],
  },
};

export const Default = () => <IconsList />;

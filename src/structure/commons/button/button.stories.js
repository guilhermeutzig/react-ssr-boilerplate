import React from 'react';
import Button from './';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Commons/Button',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'black', value: '#000' },
      { name: 'white', value: '#fff' },
    ],
  },
};

export const Default = () => <Button>This is a button</Button>;

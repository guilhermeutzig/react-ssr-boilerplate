import React from 'react';
import ImageWithBackground from './';
import { withKnobs } from '@storybook/addon-knobs';

import GlobalStyles from 'styles/globalStyles';

export default {
  title: 'Components/ImageWithBackground',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'black', value: '#000' },
      { name: 'white', value: '#fff' },
    ],
  },
};

export const Default = () => (
  <>
    <GlobalStyles />
    <ImageWithBackground />
  </>
);

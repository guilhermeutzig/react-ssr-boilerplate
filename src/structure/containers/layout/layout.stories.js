import React from 'react';
import Layout from '.';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Containers/Layout',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'black', value: '#000' },
      { name: 'white', value: '#fff' },
    ],
  },
};

export const Default = () => (
  <Layout>
    <h1>Layout</h1>
  </Layout>
);

import { withKnobs } from '@storybook/addon-knobs';
import ColorsList from '.';
import GlobalStyles from 'styles/globalStyles';

export default {
  title: 'Styleguide/Colors',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff' },
      { name: 'black', value: '#000' },
    ],
  },
};

export const Default = () => (
  <>
    <GlobalStyles />
    <ColorsList />
  </>
);

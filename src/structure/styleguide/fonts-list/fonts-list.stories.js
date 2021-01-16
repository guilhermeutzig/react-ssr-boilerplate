import { withKnobs } from '@storybook/addon-knobs';
import GlobalStyles from 'styles/globalStyles';
import Fonts from '.';

export default {
  title: 'Styleguide/Fonts',
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
    <Fonts />
  </>
);

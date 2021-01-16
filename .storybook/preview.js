import { addParameters } from '@storybook/react';

import customViewports from './config/viewports';

addParameters({
  viewport: { viewports: customViewports },
  options: {
    panelPosition: 'right',
  }
});

import { css } from 'styled-components';

import { rem } from 'styles/variables';

export default {
  xlarge: (weight = 400) => css`
    font-family: Arial, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: ${rem(20)};
    line-height: 1.6;
  `,
  large: (weight = 400) => css`
    font-family: Arial, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: ${rem(16)};
    line-height: 1.625;
  `,
  medium: (weight = 400) => css`
    font-family: Arial, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: ${rem(14)};
    line-height: 1.571;
  `,
  small: (weight = 400) => css`
    font-family: Arial, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: ${rem(12)};
    line-height: 1.5;
  `,
};

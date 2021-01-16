import styled from 'styled-components';

import fonts from 'styles/fonts';

import { rem, colors, mediaQuery } from 'styles/variables';

export const Wrapper = styled.div`
  background-image: url('/images/background.jpg');
  color: ${colors.white};
  height: ${rem(100)};
  ${fonts.small()}

  ${mediaQuery.tablet`
    height: ${rem(200)};
  `}
`;

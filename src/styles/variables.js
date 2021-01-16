import { css } from 'styled-components';

const breakpoints = {
  largeMobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '1440px',
};

export const colors = {
  white: '#fff',
  black: '#000',
};

export const rem = (pixels) => `${pixels / 10}rem`;

export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {},
);

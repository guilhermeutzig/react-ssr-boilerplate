import styled from 'styled-components';
import { rem } from 'styles/variables';
import fonts from 'styles/fonts';

export const IconsContainer = styled.div`
  display: block;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

export const Item = styled.li`
  list-style-type: none;
  padding: ${rem(30)};
  width: ${rem(60)};

  svg {
    height: ${rem(60)};
    width: ${rem(60)};
  }
`;

export const Name = styled.p`
  ${fonts.small()};
`;

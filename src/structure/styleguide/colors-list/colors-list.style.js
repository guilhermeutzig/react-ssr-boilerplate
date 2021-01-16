import styled from 'styled-components';
import fonts from 'styles/fonts';
import { colors, rem } from 'styles/variables';

export const ColorsContainer = styled.div``;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${rem(30)};
  text-align: center;
`;

export const List = styled.li`
  ${fonts.small()};
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 ${rem(10)} ${rem(25)};
  width: ${rem(90)};
`;

export const Square = styled.span`
  background-color: ${({ color }) => (color ? `${color}` : '')};
  background-image: ${({ gradient }) => (gradient ? `${gradient}` : '')};
  border-radius: ${rem(2)};
  border: ${rem(2)} solid ${colors.gray100};
  list-style-type: none;
  padding: ${rem(30)};
  width: ${rem(60)};
`;

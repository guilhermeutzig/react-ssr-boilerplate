import styled from 'styled-components';

import { ListContainer, ListItem } from './fonts-list.style';

import fonts from 'styles/fonts';

const FontsList = () => {
  const allFonts = [];

  Object.entries(fonts).forEach((item) => {
    allFonts.push({ name: item[0], font: item[1] });
  });

  return (
    <ListContainer>
      {allFonts.map(({ font, name }) => {
        const FontStyles = styled.p`
          ${font()}
        `;
        return (
          <ListItem key={name}>
            <FontStyles>{name}</FontStyles>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default FontsList;

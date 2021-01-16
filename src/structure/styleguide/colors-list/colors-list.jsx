import {
  ColorsContainer,
  ListContainer,
  List,
  Square,
} from './colors-list.style';

import { colors } from 'styles/variables';

const ColorsList = () => {
  const allColors = [];

  Object.entries(colors).forEach((item) => {
    allColors.push({ name: item[0], color: item[1] });
  });

  return (
    <ColorsContainer>
      <ListContainer>
        {allColors.map((item) => (
          <List key={item.name}>
            <Square color={item.color} gradient={item.color}></Square>
            {item.name} - {item.color}
          </List>
        ))}
      </ListContainer>
    </ColorsContainer>
  );
};

export default ColorsList;

import { IconsContainer, List, Item, Name } from './icons-list.style';

import { icons } from 'icons/icons-list.json';

const IconsList = () => (
  <IconsContainer>
    <List>
      {icons.map(({ file, name }) => {
        const Comp = require(`icons/${file}`).default;
        if (Comp) {
          return (
            <Item key={name}>
              <Comp />
              <Name>{name}</Name>
            </Item>
          );
        }
        return <></>;
      })}
    </List>
  </IconsContainer>
);

export default IconsList;

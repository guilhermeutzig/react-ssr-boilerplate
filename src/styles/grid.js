import styled from "styled";

import { mediaQuery, rem } from "./variables";

export const Container = styled.div`
  max-width: ${rem(950)};
  padding: 0 ${rem(20)};
  width: 100%;

  ${mediaQuery.laptop`
    max-width: ${rem(1280)};
  `}
`;

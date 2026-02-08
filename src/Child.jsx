import styled from "styled-components";

const BlueHone = styled.h1`
  color: ${(prop) => prop.color};
  &:hover {
    color: red;
  }
`;

export function Child() {
  return <BlueHone color="blue">Child</BlueHone>;
}

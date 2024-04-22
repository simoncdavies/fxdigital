import styled from 'styled-components';

type StyledRailProps = {
  marginleft: number;
};

export const StyledRail = styled.div<StyledRailProps>`
  width: fit-content;
  display: flex;
  padding: 0 50px;
  margin-left: calc(${(props) => props.marginleft} * (-15vw - 20px));
  transition: margin-left 0.25s ease-in;
`;

import styled from 'styled-components';

export const StyledCard = styled.div`
  flex-basis: 15vw;
  flex-shrink: 0;
  background-color: black;
  margin: 10px;
  border: 5px solid transparent;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition:
    background-color 0.25s ease-in,
    scale 0.25s ease-in;

  &.isFocussed {
    scale: 1.05;
    background-color: #00ddff;

    .card__poster {
      border-color: #00ddff;
    }
  }
`;

export const StyledCardImage = styled.img`
  display: block;
  width: 100%;
  border: solid 1px white;
  border-radius: 5px;
  transition: all 0.25s ease-in;
`;

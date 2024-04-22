import styled from 'styled-components';

export const StyledHome = styled.section`
  width: 100%;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1) 10px,
        rgba(0, 0, 0, 0) 50px
      ),
      linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 0,
        rgba(0, 0, 0, 1) 10px,
        rgba(0, 0, 0, 0) 50px
      );
  }
`;

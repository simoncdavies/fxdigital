import styled from 'styled-components';

interface StyledDetailsProps {
  background: string;
}

export const StyledDetails = styled.section<StyledDetailsProps>`
  margin-top: 5%;
  margin-left: 5%;
  background-color: black;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-color: black;
    border-radius: 10px;
  }
`;

export const StyledDetailsContainer = styled.div`
  position: relative;
  margin: 20px;
`;

export const StyledDetailsTitle = styled.h1`
  color: white;
`;

export const StyledDetailsImage = styled.img`
  display: block;
`;

export const StyledDetailsText = styled.p`
  color: white;
`;

export const StyledDetailsButton = styled.button`
  cursor: pointer;
`;

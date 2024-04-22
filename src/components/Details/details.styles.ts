import styled from 'styled-components';

interface StyledDetailsProps {
  background: string;
}

export const StyledDetails = styled.section<StyledDetailsProps>`
  height: 100vh;
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
  font-size: 2rem;
  color: white;
  border-bottom: solid 2px #fff;
  margin: 0 0 10px;
`;

export const StyledDetailsImage = styled.img`
  display: block;
  float: right;
  margin: 0 0 0 20px;
  border: solid 1px #fff;
  border-radius: 5px;
`;

export const StyledDetailsText = styled.p`
  color: white;
  margin: 0 0 1rem;
`;

export const StyledDetailsButton = styled.button`
  background-color: #000;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.5rem;
  color: #fff;
  padding: 10px 20px;
  border: solid 1px #fff;
  border-radius: 5px;

  &.isFocussed {
    background-color: #fff;
    color: #000;
  }
`;

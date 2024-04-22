import React from 'react';
import { StyledError, StyledErrorTitle, StyledErrorText } from './error.styles';

const Error = ({ message }: { message: string }) => {
  return (
    <StyledError>
      <StyledErrorTitle>Error</StyledErrorTitle>
      <StyledErrorText>{message}</StyledErrorText>
    </StyledError>
  );
};

export default Error;

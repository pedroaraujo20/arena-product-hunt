import React from 'react';
import { FiMeh } from 'react-icons/fi';

import { Container } from './styles';

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <Container>
      <FiMeh />
      <span>
        Error:
        {message}
      </span>
    </Container>
  );
};

export default Error;

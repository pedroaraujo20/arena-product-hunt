import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

const Button = ({ children, ...rest }: ButtonProps) => (
  <Container {...rest}>{children}</Container>
);

export default Button;

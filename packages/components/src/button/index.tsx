import React, { FC, ReactNode } from 'react';
import { Btn } from './styles';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

export default Button;

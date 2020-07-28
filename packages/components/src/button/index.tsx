import React, { FC, ReactNode } from 'react';
import { Btn } from './styles';

export interface Props {
  children: ReactNode;
  [k: string]: ReactNode | Function;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

export default Button;

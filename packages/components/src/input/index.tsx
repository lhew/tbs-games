import React, { FC, ReactNode } from 'react';
import { StyledInput } from './styles';

export interface Props {
  className?: string;
  children?: ReactNode;
  [k: string]: any;
}
1;
const Input: FC<Props> = ({ className, children, ...props }) => {
  return (
    <StyledInput className={className} {...props}>
      {children}
    </StyledInput>
  );
};

export default Input;

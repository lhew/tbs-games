import React, { FC, ReactNode } from 'react';
import { StyledToaster } from './styles';

export interface Props {
  children: ReactNode;
  isOpen?: boolean;
  [k: string]: ReactNode;
}

const Toaster: FC<Props> = ({ children, isOpen = false, ...props }) => {
  return (
    <StyledToaster isOpen={isOpen} {...props}>
      {children}
    </StyledToaster>
  );
};

export default Toaster;

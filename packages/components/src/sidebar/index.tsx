import React, { FC, ReactNode } from 'react';
import { StyledSidebar } from './styles';

export interface Props {
  children?: ReactNode;
  isOpen?: boolean;
  [k: string]: ReactNode;
}

const Sidebar: FC<Props> = ({ children, isOpen = false, ...props }) => {
  return (
    <StyledSidebar isOpen={isOpen} {...props}>
      {children}
    </StyledSidebar>
  );
};

export default Sidebar;

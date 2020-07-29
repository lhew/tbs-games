import React, { FC, ReactNode } from 'react';
import { StyledPopup, Backdrop } from './styles';

export interface Props {
  children: ReactNode;
  isOpen?: boolean;
  [k: string]: ReactNode;
  transparent?: boolean;
}

const Popup: FC<Props> = ({ children, transparent = false, ...props }) => {
  return (
    <>
      <Backdrop transparent={transparent === false}>
        <StyledPopup {...props}>{children}</StyledPopup>
      </Backdrop>
    </>
  );
};

export default Popup;

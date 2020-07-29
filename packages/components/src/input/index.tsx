import React, { FC } from 'react';
import { StyledInput } from './styles';

export interface Props {
  className?: string;
  [k: string]: any;
}

const Input: FC<Props> = ({ className, ...props }) => {
  return <StyledInput className={className} {...props} />;
};

export default Input;

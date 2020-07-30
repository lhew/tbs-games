import React, { FC, ReactNode } from 'react';
import { StyledFormField, StyledLabel, Message } from './styles';
import Input from '../input';

export interface Props {
  children?: ReactNode;
  align?: 'rows' | 'columns';
  label?: ReactNode;
  message?: ReactNode;
  [k: string]: ReactNode;
}

const FormField: FC<Props> = ({ label, children, message, type, align = 'rows', ...props }) => {
  return (
    <>
      <StyledFormField align={align}>
        {label && <StyledLabel>{label}</StyledLabel>}

        {type !== 'select' ? <Input {...props} /> : <Input {...props}>{children}</Input>}
        {message && <Message>{message}</Message>}
      </StyledFormField>
    </>
  );
};

export default FormField;

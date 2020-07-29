import styled from 'styled-components';
const tokens = require('@tbs-games/design-tokens');

export const StyledInput = styled.input`
  font-size: 1em;
  background: ${tokens.InputDefaultBackgroundColor};
  color: ${tokens.InputDefaultColor};
  font-family: ${tokens.InputDefaultFontFamily};
  border-radius: ${tokens.ButtonDefaultBorderRadius};
  border: ${tokens.InputDefaultBorderThickness}px solid ${tokens.InputDefaultBorderColor};
  line-height: 1;
  padding: 0.75em;
  height: 2.5em;

  &:focus,
  &:active {
    outline: none;
    color: ${tokens.InputFocusColor};
    border-color: ${tokens.InputFocusBorderColor};
  }

  &:disabled {
    background: ${tokens.InputDisabledBackgroundColor};
    color: ${tokens.InputDisabledColor};
  }
`;

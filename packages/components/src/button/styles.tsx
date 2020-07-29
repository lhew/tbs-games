import styled from 'styled-components';
const tokens = require('@tbs-games/design-tokens');

export const Btn = styled.button`
  font-size: 1em;
  background: ${tokens.ButtonDefaultBackgroundColor};
  color: ${tokens.ButtonDefaultColor};
  font-family: ${tokens.ButtonDefaultFontFamily};
  font-weight: bold;
  border-radius: ${tokens.ButtonDefaultBorderRadius};
  border: none;
  line-height: 1;
  padding: 0.75em;
  height: 2.5em;

  &:focus,
  &:active {
    outline: none;
    background: ${tokens.ButtonDefaultFocusBackgroundColor};
  }

  &:disabled {
    background: ${tokens.ButtonDisabledBackgroundColor};
  }
`;

import styled from 'styled-components';
import * as tokens from '@tbs-games/design-tokens';

export const Btn = styled.button`
  background: ${tokens.ButtonDefaultBackgroundColor};
  color: ${tokens.ButtonDefaultColor};
  font-family: ${tokens.ButtonDefaultFontFamily};
  font-weight: bold;
  border-radius: ${tokens.ButtonDefaultBorderRadius};
  border: none;
  padding: 0.7em 1em;
  height: 2.55em;

  &:focus,
  &:active {
    outline: none;
    background: ${tokens.ButtonDefaultFocusBackgroundColor};
  }

  &:disabled {
    background: ${tokens.ButtonDisabledBackgroundColor};
  }
`;

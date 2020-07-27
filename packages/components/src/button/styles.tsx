import styled from 'styled-components';
import * as tokens from '@tbs-games/design-tokens';

console.log(tokens);

export const Btn = styled.button`
  background: ${tokens.ButtonDefaultBackgroundColor};
  color: ${tokens.ButtonDefaultColor};
  font-family: ${tokens.ButtonDefaultFontFamily};
  font-weight: bold;
  border: none;
  padding: 0.7em;
  height: 2em;

  &:focus {
    outline: none;
  }
`;

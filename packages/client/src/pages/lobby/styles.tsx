import styled from 'styled-components';
import { Screen } from '../../config/styles';
const tokens = require('@tbs-games/design-tokens');

export const Canvas = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

console.log('tokens: ', tokens);

export const StyledButton = styled.span`
  font-size: 1.5em;
  padding: 1.5em;
  text-align: center;
  margin-bottom: 1em;
  cursor: pointer;
  background: ${({ type = 'primary' }: { type?: 'primary' | 'secondary' }) =>
    type === 'primary' ? tokens.ColorPrimary300 : tokens.ColorSecondary300};
  border-radius: ${tokens.BorderRadiusDefault};
  border: none;
  color: #fff;
  &:focus,
  &:active {
    background: ${({ type = 'primary' }: { type?: 'primary' | 'secondary' }) =>
      type === 'primary' ? tokens.ColorPrimary100 : tokens.ColorSecondary100};
  }
`;

export const GameOptionsWrapper = styled.div`
  margin: 2em auto;
  display: grid;
  grid-template: auto auto / auto;
  gap: 1.5em;
  max-width: 25em;
  width: 100%;
  @media screen and (min-width: ${Screen.TABLET}px) {
    grid-template: auto auto / auto;
  }
`;

import styled from 'styled-components';
const tokens = require('@tbs-games/design-tokens');

export const StyledPopup = styled.div`
  transition: all 0.3s;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: 1.5em;
  background: #fff;
  border-radius: ${tokens.BorderRadiusDefault};
  z-index: 101;
  box-shadow: ${tokens.ShadowDefault};
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: ${({ transparent = true }: { transparent?: boolean }) =>
    transparent ? '#00000000' : `${tokens.ColorPrimary300}50`};
`;

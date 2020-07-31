import styled from 'styled-components';
const tokens = require('@tbs-games/design-tokens');

export const StyledSidebar = styled.div`
  transition: all 0.3s;
  box-shadow: ${tokens.ShadowDefault};
  padding: 1.5em;
  position: fixed;
  left: ${({ isOpen = true }: { isOpen?: boolean }) => (isOpen ? '0' : '-16em')};
  top: 0;
  height: 100%;
  z-index: 90;
  width: 16em;
`;

export const SidebarBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 91;
  background: ${({ transparent = true }: { transparent?: boolean }) =>
    transparent ? '#00000000' : `${tokens.ColorPrimary300}50`};
`;

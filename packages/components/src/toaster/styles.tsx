import styled from 'styled-components';
const tokens = require('@tbs-games/design-tokens');

export const StyledToaster = styled.div`
  transition: all 0.3s;
  position: absolute;
  left: 50%;
  bottom: 2em;
  opacity: 0;
  transform: translate3d(0, -50%, 0);
  font-size: 1em;
  text-align: center;
  padding: 1.5em;
  background: ${tokens.ToasterDefaultBackgroundColor};
  color: ${tokens.ToasterDefaultColor};
  font-family: ${tokens.ToasterDefaultFontFamily};
  font-weight: bold;
  border-radius: ${tokens.ToasterDefaultBorderRadius};

  ${({ isOpen = false }: { isOpen?: boolean }) => {
    if (isOpen) {
      return `
        bottom: 1em;
        opacity: 1;
      `;
    }

    return `
      bottom: -2em;
      opacity: 0;
    `;
  }}
`;

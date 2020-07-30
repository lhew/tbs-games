import styled from 'styled-components';
// const tokens = require('@tbs-games/design-tokens');

export const StyledFormField = styled.div`
  display: grid;
  grid-template: ${({ align = 'rows' }: { align?: 'rows' | 'columns' }) =>
    align === 'rows' ? 'auto / 1fr 1fr' : '1fr 1fr / auto'};

  gap: 1em;
  margin-bottom: 1em;
`;

export const StyledLabel = styled.label`
  padding: 0.75em 0;
`;

export const Message = styled.div`
  grid-column: 2;
  font-size: 85%;
`;

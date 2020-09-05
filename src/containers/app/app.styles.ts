import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.colors.light};
`;

export const Body = styled.div`
  padding: 2.5rem 0;
`;

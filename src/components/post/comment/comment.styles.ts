import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  flex: 1;
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
`;

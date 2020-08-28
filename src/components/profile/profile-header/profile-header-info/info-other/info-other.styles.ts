import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bio = styled.div`
  margin-bottom: 0.5rem;
`;

export const Website = styled.a`
  color: ${({ theme }) => theme.colors.medium};
`;

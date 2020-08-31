import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.solitude};
`;

export const Span = styled.span`
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.1rem;
  font-weight: bold;
`;

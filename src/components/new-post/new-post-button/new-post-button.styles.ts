import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.label`
  margin-right: 1rem;
`;

export const Input = styled.input`
  display: none;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.material.palette.primary.main};
  font-weight: bold;
  cursor: pointer;
`;

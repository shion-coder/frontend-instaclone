import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.label``;

export const Input = styled.input`
  display: none;
`;

export const Text = styled.p`
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.material.palette.secondary.main};

  :hover {
    text-decoration: underline;
  }
`;

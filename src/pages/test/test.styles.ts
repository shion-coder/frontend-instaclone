import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Main = styled.main`
  padding: ${({ theme }) => theme.material.spacing(8, 0, 6)};
  flex: 1;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.material.palette.background.paper};
  padding: ${({ theme }) => theme.material.spacing(4, 4)};
`;

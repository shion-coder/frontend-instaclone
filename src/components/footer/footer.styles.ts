import styled from 'styled-components';
import { Typography } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.material.palette.background.paper};
  padding: ${({ theme }) => theme.material.spacing(2, 2)};
`;

export const Span = styled(Typography)`
  padding: ${({ theme }) => theme.material.spacing(1, 1)};
  font-weight: bold;
`;

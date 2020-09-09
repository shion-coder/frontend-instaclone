import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Header = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
  padding: ${({ theme }) => theme.material.spacing(3, 0)};

  @media screen and (max-width: 599px) {
    border-bottom: none;
    padding-top: ${({ theme }) => theme.material.spacing(0) + 'px'};
  }
`;

export const Content = styled(Grid)`
  position: relative;
`;

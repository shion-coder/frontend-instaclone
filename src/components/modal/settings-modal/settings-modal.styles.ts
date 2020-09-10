import styled from 'styled-components';
import { Paper, Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(Paper)`
  width: 20rem;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem 0px ${({ theme }) => theme.colors.grey};

  @media screen and (max-width: 599px) {
    width: 16rem;
  }
`;

export const Image = styled(Grid)`
  padding: ${({ theme }) => theme.material.spacing(2.5, 0, 0)};
  border-bottom: ${({ theme }) => `1px solid ${theme.material.palette.divider}`};
`;

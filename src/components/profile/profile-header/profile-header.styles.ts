import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const AvatarContainer = styled(Grid)`
  @media screen and (max-width: 599px) {
    padding: ${({ theme }) => theme.material.spacing(3, 0, 0)};
  }
`;

export const InfoContainer = styled(Grid)`
  padding: ${({ theme }) => theme.material.spacing(4, 3)};
`;

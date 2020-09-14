import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Content = styled.div``;

export const Load = styled(Grid)`
  margin-top: ${({ theme }) => theme.material.spacing(1) + 'px'};
`;

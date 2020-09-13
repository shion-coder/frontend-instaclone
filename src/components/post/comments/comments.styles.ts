import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled(Grid)`
  flex: 1;
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
`;

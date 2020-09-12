import styled from 'styled-components';
import { Grid, IconButton } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(Grid)`
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
`;

export const SavedButton = styled(IconButton)`
  margin-left: auto;
`;

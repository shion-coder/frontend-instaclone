import styled from 'styled-components';
import { Grid, IconButton } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(Grid)`
  padding: 0.25rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
`;

export const SavedButton = styled(IconButton)`
  margin-left: auto;
`;

export const Stats = styled(Grid)``;

export const Count = styled.span`
  margin-left: 0.75rem;
  font-weight: bold;
`;

export const Date = styled.span`
  margin: 0.5rem 0.75rem 0.75rem;
`;

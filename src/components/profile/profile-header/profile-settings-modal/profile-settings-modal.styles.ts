import styled from 'styled-components';
import { List, ListItem, ListItemText } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled(List)`
  background: ${({ theme }) => theme.colors.light};
  width: 30vw;
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
`;

export const Item = styled(ListItem)`
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey2}`};
`;

export const Text = styled(ListItemText)`
  text-align: center;

  .MuiTypography-body1 {
    letter-spacing: 1px;
  }
`;

import styled from 'styled-components';
import { ListItem, ListItemText } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type StyledListItemProps = {
  border?: number;
};

export const StyledListItem = styled(ListItem)<StyledListItemProps>`
  border-bottom: ${({ theme, border }) => (border ? `${border}px solid ${theme.material.palette.divider}` : 'none')};
`;

export const StyledListItemText = styled(ListItemText)`
  text-align: center;

  .MuiListItemText-secondary {
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
`;

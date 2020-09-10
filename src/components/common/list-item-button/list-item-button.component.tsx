import React, { FC } from 'react';

import { StyledListItem, StyledListItemText } from './list-item-button.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  border?: number;
  text: string;
};

const ListItemButton: FC<Props> = ({ border, text }) => (
  <StyledListItem button border={border}>
    <StyledListItemText secondary={text} />
  </StyledListItem>
);

export default ListItemButton;

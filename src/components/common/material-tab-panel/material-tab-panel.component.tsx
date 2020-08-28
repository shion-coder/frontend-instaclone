import React, { FC, ReactNode } from 'react';

import { Container } from './material-tab-panel.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  value: number;
  index: number;
  children?: ReactNode;
}

const MaterialTabPanel: FC<Props> = ({ value, index, children }) => (
  <Container hidden={value !== index}>{children}</Container>
);

export default MaterialTabPanel;

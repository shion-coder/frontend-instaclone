import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';

import { Logo as DefaultLogo } from 'components/common/icon';

/* -------------------------------------------------------------------------- */

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.material.palette.background.paper};
`;

export const StyledToolbar = styled(Toolbar)`
  padding: 0;
`;

export const LogoContainer = styled.div`
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Logo = styled(DefaultLogo).attrs(({ theme }) => ({ fill: theme.material.palette.text.secondary }))`
  width: 2rem;
  height: 2rem;
`;

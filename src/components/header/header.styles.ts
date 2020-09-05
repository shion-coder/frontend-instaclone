import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(AppBar)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.solitude};
  box-shadow: none;
`;

export const Container = styled(Toolbar)`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
`;

export const StyledHomeIcon = styled(HomeIcon)`
  font-size: 40px;
  cursor: pointer;
`;

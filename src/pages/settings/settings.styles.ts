import styled from 'styled-components';
import { Grid, Tabs, Tab } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(Grid)`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.solitude};
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

export const StyledTabs = styled(Tabs)`
  border-right: ${({ theme }) => `1px solid ${theme.colors.grey}`};

  .MuiTab-textColorInherit.Mui-selected {
    font-weight: bold;
  }
`;

export const StyledTab = styled(Tab)`
  text-transform: capitalize;
`;

import styled from 'styled-components';
import { Paper, Tabs, Tab } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const StyledPaper = styled(Paper)`
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 0.5rem 0px ${({ theme }) => theme.colors.grey};
`;

export const StyledTabs = styled(Tabs)`
  .MuiTab-textColorInherit.Mui-selected {
    font-weight: bold;
  }

  .MuiTabs-indicator {
    width: 0.25rem;
  }
`;

export const StyledTab = styled(Tab)`
  text-transform: capitalize;
`;

import styled from 'styled-components';
import { Grid, Tabs, Tab } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type TabProps = {
  display?: number;
};

export const Content = styled(Grid)`
  padding: ${({ theme }) => theme.material.spacing(5, 0, 0)};
`;

export const StyledTabs = styled(Tabs)`
  @media screen and (max-width: 599px) {
    .MuiTabs-flexContainer {
      justify-content: space-around;
    }
  }
`;

export const StyledTab = styled(Tab)<TabProps>`
  font-weight: bold;
  text-transform: capitalize;
  display: ${({ display }) => (display === 0 ? 'none' : 'inline')};
`;

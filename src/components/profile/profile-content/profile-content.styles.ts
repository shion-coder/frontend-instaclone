import styled from 'styled-components';
import { Tabs, Tab } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type TabProps = {
  display?: number;
};

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div``;

export const StyledTabs = styled(Tabs)``;

export const StyledTab = styled(Tab)<TabProps>`
  text-transform: capitalize;
  font-weight: bold;
  display: ${({ display }) => (display === 0 ? 'none' : 'inline')};
`;

export const Content = styled.div`
  margin-top: 1rem;
`;

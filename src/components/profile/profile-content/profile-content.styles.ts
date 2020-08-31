import styled from 'styled-components';
import { Tabs, Tab } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div``;

export const StyledTabs = styled(Tabs)``;

export const StyledTab = styled(Tab)`
  text-transform: capitalize;
  font-weight: bold;
`;

export const Content = styled.div`
  margin-top: 1rem;
`;

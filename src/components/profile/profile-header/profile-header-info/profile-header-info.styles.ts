import styled from 'styled-components';
import { Grid, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

/* -------------------------------------------------------------------------- */

export const Container = styled(Grid)`
  padding: 1rem;
`;

export const Handle = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
`;

export const Edit = styled(Button)`
  font-weight: bold;
  text-transform: capitalize;
  margin-right: 1rem;
`;

export const Icon = styled(SettingsIcon)`
  cursor: pointer;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Number = styled.span`
  font-weight: bold;
`;

export const Posts = styled(Grid)``;

export const Other = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bio = styled.div`
  margin-bottom: 0.5rem;
`;

export const Website = styled.a`
  color: ${({ theme }) => theme.colors.medium};
`;

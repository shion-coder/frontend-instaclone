import styled from 'styled-components';
import { Grid, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

/* -------------------------------------------------------------------------- */

export const Container = styled(Grid)`
  padding: 1rem;
`;

export const Meta = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Setting = styled.div`
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

export const Follow = styled(Button)`
  font-weight: bold;
  text-transform: capitalize;
`;

export const Stats = styled(Grid)`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Number = styled.span`
  font-weight: bold;
`;

export const Posts = styled(Grid)``;

export const Followers = styled(Grid)``;

export const Following = styled(Grid)``;

export const Other = styled(Grid)``;

export const Bio = styled(Grid)`
  margin-bottom: 0.5rem;
`;

export const Website = styled.a``;

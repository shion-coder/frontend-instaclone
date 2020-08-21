import styled from 'styled-components';
import { Avatar, Button, Grid } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

/* -------------------------------------------------------------------------- */

export const Container = styled(Grid)``;

export const Image = styled(Grid)``;

export const StyledAvatar = styled(Avatar)`
  width: 8rem;
  height: 8rem;
  cursor: pointer;
`;

export const Info = styled(Grid)`
  height: 8rem;
  padding: 1rem;
`;

export const Meta = styled(Grid)``;

export const Name = styled(Grid)`
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Setting = styled(Grid)``;

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
`;

export const Number = styled.span`
  font-weight: bold;
`;

export const Posts = styled(Grid)``;

export const Followers = styled(Grid)``;

export const Following = styled(Grid)``;

export const Bio = styled(Grid)``;

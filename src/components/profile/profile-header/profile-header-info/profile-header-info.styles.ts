import styled from 'styled-components';
import { Grid, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import Lottie from 'react-lottie-player';

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
  position: relative;
`;

export const Layer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const StyledLottie = styled(Lottie)`
  width: 25px;
  height: 25px;
`;

export const Stats = styled(Grid)`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Number = styled.span`
  font-weight: bold;
`;

export const Posts = styled(Grid)``;

export const Followers = styled(Grid)`
  cursor: pointer;
`;

export const Following = styled(Grid)`
  cursor: pointer;
`;

export const Other = styled(Grid)``;

export const Bio = styled(Grid)`
  margin-bottom: 0.5rem;
`;

export const Website = styled.a``;

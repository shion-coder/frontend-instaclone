import styled from 'styled-components';
import { Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
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

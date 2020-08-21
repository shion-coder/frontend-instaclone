import styled from 'styled-components';
import { Typography, Button, Fab } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

const StyledButton = styled(Button)`
  .MuiButton-label {
    font-weight: bold;
  }
`;

export const StyledTypography = styled(Typography)`
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const Profile = styled(Fab)`
  margin-right: 10px;
`;

export const Logout = styled(StyledButton)``;

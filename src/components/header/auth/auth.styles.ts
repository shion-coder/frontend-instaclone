import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';

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

export const Logout = styled(StyledButton)``;

import styled from 'styled-components';
import { Button } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

const StyledButton = styled(Button)`
  .MuiButton-label {
    font-weight: bold;
  }
`;

export const Register = styled(StyledButton)`
  margin-right: 10px;
`;

export const Login = styled(StyledButton)``;

import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Form } from 'formik';

import Button from 'components/common/button/formik-button';

/* -------------------------------------------------------------------------- */

export const StyledTypography = styled(Typography)`
  text-align: center;
  font-weight: bold;
  margin: ${({ theme }) => theme.material.spacing(4, 0, 0)};
`;

export const StyledForm = styled(Form)`
  margin-top: ${({ theme }) => theme.material.spacing(3) + 'px'};
`;

export const StyledButton = styled(Button)`
  margin: ${({ theme }) => theme.material.spacing(3, 0, 0)};
`;

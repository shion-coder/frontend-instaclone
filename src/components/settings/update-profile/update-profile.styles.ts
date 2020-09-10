import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from '@material-ui/core';

import FormikButton from 'components/common/button/formik-button';

/* -------------------------------------------------------------------------- */

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  @media screen and (max-width: 599px) {
    padding: 1rem;
  }
`;

export const StyledForm = styled(Form)`
  margin-top: ${({ theme }) => theme.material.spacing(1) + 'px'};

  .MuiButton-label {
    text-transform: capitalize;
  }

  .MuiFormLabel-root {
    font-size: 0.8rem;
    letter-spacing: 1px;
    top: 2px;
  }
`;

export const StyledButton = styled(FormikButton)`
  margin: ${({ theme }) => theme.material.spacing(2, 0, 2)};
`;

export const Warn = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.8rem;
`;

export const Resend = styled(Button)`
  color: ${({ theme }) => theme.material.palette.primary.main};
  font-weight: bold;
  font-size: 0.8rem;
`;

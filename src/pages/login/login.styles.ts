import styled from 'styled-components';
import { Form } from 'formik';
import { Container, Box } from '@material-ui/core';

import Button from 'components/common/button/formik-button';
import OauthButton from 'components/common/button/oauth-button';
import { Google } from 'components/common/icon';

/* -------------------------------------------------------------------------- */

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  margin-top: ${({ theme }) => theme.material.spacing(3) + 'px'};
`;

export const StyledButton = styled(Button)`
  margin: ${({ theme }) => theme.material.spacing(2, 0, 1)};
`;

export const GoogleButton = styled(OauthButton)`
  margin: ${({ theme }) => theme.material.spacing(1, 0, 3)};
`;

export const GoogleLogo = styled(Google)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const StyledBox = styled(Box)`
  color: ${({ theme }) => theme.material.palette.text.secondary};
  font-size: 0.8rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 599px) {
    margin: ${({ theme }) => theme.material.spacing(1, 0)};
  }
`;

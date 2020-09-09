import React, { FC } from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import { Grid } from '@material-ui/core';

import { LoginProps } from 'types';
import { useLogin, useCustomHistory } from 'hooks';
import { validateLogin } from 'utils';
import Avatar from 'components/common/avatar';
import Field from 'components/common/formik-field';
import Welcome from 'assets/images/welcome.jpeg';

import {
  StyledContainer as Container,
  StyledForm as Form,
  StyledButton as Button,
  GoogleButton as Google,
  StyledBox as Box,
  GoogleLogo,
} from './login.styles';

/* -------------------------------------------------------------------------- */

type LocationState = {
  from: Location;
};

type Props = RouteComponentProps<Record<string, string | undefined>, StaticContext, LocationState>;

const Login: FC<Props> = ({ location: { state } }) => {
  const { login } = useLogin(state);
  const { goRegister, goLogin } = useCustomHistory();

  /**
   * Handle login
   */

  const handleSubmit = (values: LoginProps, formik: FormikHelpers<LoginProps>) => login({ values, formik });

  /**
   * Initial values in formik login form
   */

  const initialValues: LoginProps = {
    usernameOrEmail: '',
    password: '',
  };

  return (
    <Container maxWidth="xs">
      <Avatar width="8rem" height="8rem" src={Welcome} />

      <Formik initialValues={initialValues} validationSchema={validateLogin} onSubmit={handleSubmit}>
        <Form noValidate>
          <Field name="usernameOrEmail" label="Email" fullWidth required />

          <Field name="password" type="password" fullWidth required />

          <Button size="large" fullWidth>
            Sign In
          </Button>

          <Google provider="google" startIcon={<GoogleLogo />} state={state} size="large" fullWidth>
            Sign in with Google
          </Google>

          <Grid container>
            <Grid item xs={12} sm={6} onClick={goLogin}>
              <Box>Forgot password?</Box>
            </Grid>

            <Grid item xs={12} sm={6} onClick={goRegister}>
              <Box>Don't have an account? Sign Up</Box>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;

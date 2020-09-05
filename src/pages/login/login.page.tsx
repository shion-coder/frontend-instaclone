import React, { FC } from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import { Grid } from '@material-ui/core';
import Account from '@material-ui/icons/AccountCircle';

import { LoginProps, Path } from 'types';
import { useLogin } from 'hooks';
import { validateLogin } from 'utils';
import Field from 'components/common/formik-field';
import GoogleImage from 'assets/images/google-icon.svg';

import {
  StyledContainer as Container,
  StyledTypography as Typography,
  StyledAvatar as Avatar,
  StyledForm as Form,
  StyledButton as Button,
  GoogleButton as Google,
  StyledLink as Link,
  GoogleIcon,
} from './login.styles';

/* -------------------------------------------------------------------------- */

type LocationState = {
  from: Location;
};

type Props = RouteComponentProps<Record<string, string | undefined>, StaticContext, LocationState>;

const Login: FC<Props> = ({ location: { state } }) => {
  const { login, isLoading } = useLogin(state);

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
    <Container>
      <Avatar>
        <Account />
      </Avatar>

      <Typography>Sign In</Typography>

      <Formik initialValues={initialValues} validationSchema={validateLogin} onSubmit={handleSubmit}>
        <Form noValidate>
          <Field name="usernameOrEmail" label="Email" size="medium" fullWidth required />

          <Field name="password" size="medium" type="password" fullWidth required />

          <Button type="submit" isLoading={isLoading} fullWidth>
            Sign In
          </Button>

          <Google
            provider="google"
            startIcon={<GoogleIcon src={GoogleImage} />}
            color="primary"
            state={state}
            fullWidth
          >
            Sign in with Google
          </Google>

          <Grid container>
            <Grid item xs>
              <Link to={Path.LOGIN}>Forgot password?</Link>
            </Grid>

            <Grid item>
              <Link to={Path.REGISTER}>Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;

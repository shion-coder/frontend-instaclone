import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, FormikHelpers, FormikErrors } from 'formik';
import { Grid } from '@material-ui/core';
import Account from '@material-ui/icons/AccountCircle';

import { LoginProps, Path } from 'types';
import { Dispatch, login } from 'store';
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

const Login: FC<Props> = ({ history, location: { state } }) => {
  const { REGISTER, LOGIN } = Path;
  const dispatch: Dispatch = useDispatch();

  const handleSubmit = async (values: LoginProps, formikHelpers: FormikHelpers<LoginProps>) => {
    const result = await dispatch(login(values));

    if (login.fulfilled.match(result)) {
      return !state ? history.push('/') : history.push(state.from.pathname);
    }

    result.payload && formikHelpers.setErrors(result.payload as FormikErrors<LoginProps>);
  };

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

          <Button type="submit" size="medium" fullWidth>
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
              <Link to={LOGIN}>Forgot password?</Link>
            </Grid>

            <Grid item>
              <Link to={REGISTER}>Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;

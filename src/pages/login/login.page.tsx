import React, { FC } from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, FormikHelpers, FormikErrors } from 'formik';
import { toast } from 'react-toastify';
import { Grid } from '@material-ui/core';
import Account from '@material-ui/icons/AccountCircle';

import { LoginDataProps } from 'types';
import { Dispatch, login } from 'store';
import { validateLogin } from 'config';
import Field from 'components/formik-field';

import {
  StyledContainer as Container,
  StyledTypography as Typography,
  StyledAvatar as Avatar,
  StyledForm as Form,
  StyledButton as Button,
  StyledLink as Link,
} from './login.styles';

/* -------------------------------------------------------------------------- */

type LocationState = {
  from: Location;
};

type Props = RouteComponentProps<Record<string, string | undefined>, StaticContext, LocationState>;

const Login: FC<Props> = ({ history, location: { state } }) => {
  const dispatch: Dispatch = useDispatch();

  const handleSubmit = async (values: LoginDataProps, formikHelpers: FormikHelpers<LoginDataProps>) => {
    const result = await dispatch(login(values));

    if (login.fulfilled.match(result)) {
      toast.success(`Welcome ${result.payload?.user.firstName}`, { toastId: 'login-fulfilled' });

      return !state ? history.push('/') : history.push(state.from.pathname);
    }

    result.payload && formikHelpers.setErrors(result.payload as FormikErrors<LoginDataProps>);
  };

  const initialValues: LoginDataProps = {
    usernameOrEmail: '',
    password: '',
  };

  return (
    <Container>
      <Avatar>
        <Account />
      </Avatar>

      <Typography>Login</Typography>

      <Formik initialValues={initialValues} validationSchema={validateLogin} onSubmit={handleSubmit}>
        <Form noValidate>
          <Field
            id="usernameOrEmail"
            name="usernameOrEmail"
            label="Email Address"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />

          <Field
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            fullWidth
            required
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>

          <Grid container>
            <Grid item xs>
              <Link to="/login">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/register">Don't have an account? Register</Link>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;

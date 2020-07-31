import React, { FC } from 'react';
import { Formik } from 'formik';
import { Grid } from '@material-ui/core';
import Account from '@material-ui/icons/AccountCircle';

import Field from 'components/formik-field';
import { validateLogin } from 'config';

import {
  StyledContainer as Container,
  StyledTypography as Typography,
  StyledAvatar as Avatar,
  StyledForm as Form,
  StyledButton as Button,
  StyledLink as Link,
} from './login.styles';

/* -------------------------------------------------------------------------- */

const Login: FC = () => {
  return (
    <Container>
      <Avatar>
        <Account />
      </Avatar>

      <Typography>Login</Typography>

      <Formik
        initialValues={{
          usernameOrEmail: '',
          password: '',
        }}
        validationSchema={validateLogin}
        onSubmit={(value) => console.log(value)}
      >
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

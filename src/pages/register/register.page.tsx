import React, { FC } from 'react';
import { Formik } from 'formik';
import { Grid } from '@material-ui/core';
import Account from '@material-ui/icons/AccountCircle';

import Field from 'components/formik-field';
import { validateRegister } from 'config';

import {
  StyledContainer as Container,
  StyledTypography as Typography,
  StyledAvatar as Avatar,
  StyledForm as Form,
  StyledButton as Button,
  StyledLink as Link,
} from './register.styles';

/* -------------------------------------------------------------------------- */

const Register: FC = () => {
  return (
    <Container>
      <Avatar>
        <Account />
      </Avatar>

      <Typography>Register</Typography>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validateRegister}
        onSubmit={(value) => console.log(value)}
      >
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field id="firstName" name="firstName" label="First Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field id="lastName" name="lastName" label="Last Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Field id="username" name="username" label="Username" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <Field id="email" name="email" label="Email Address" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <Field
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
                required
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>

          <Grid justify="flex-end" container>
            <Link to="/login">Already have an account? Login</Link>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default Register;

import React, { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Grid } from '@material-ui/core';
import Account from '@material-ui/icons/AccountCircle';

import { RegisterProps, Path } from 'types';
import { useRegister } from 'hooks';
import { validateRegister } from 'utils';
import Field from 'components/common/formik-field';

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
  const { register, isLoading } = useRegister();

  /**
   * Handle register
   */

  const handleSubmit = (values: RegisterProps, formik: FormikHelpers<RegisterProps>) => register({ values, formik });

  /**
   * Initial values in formik register form
   */

  const initialValues: RegisterProps = {
    firstName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <Container>
      <Avatar>
        <Account />
      </Avatar>

      <Typography>Create your account</Typography>

      <Formik initialValues={initialValues} validationSchema={validateRegister} onSubmit={handleSubmit}>
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field name="firstName" fullWidth required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field name="lastName" fullWidth />
            </Grid>
          </Grid>

          <Field name="username" fullWidth required />

          <Field name="email" fullWidth required />

          <Field name="password" type="password" fullWidth required />

          <Field name="confirmPassword" type="password" fullWidth required />

          <Button type="submit" isLoading={isLoading} fullWidth>
            Sign Up
          </Button>

          <Grid justify="flex-end" container>
            <Link to={Path.LOGIN}>Already have an account? Sign In</Link>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default Register;

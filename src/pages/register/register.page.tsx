import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, FormikHelpers, FormikErrors } from 'formik';
import { toast } from 'react-toastify';
import { Grid } from '@material-ui/core';
import Account from '@material-ui/icons/AccountCircle';

import { RegisterProps, Path } from 'types';
import { Dispatch, register } from 'store';
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
  const { LOGIN } = Path;
  const dispatch: Dispatch = useDispatch();

  const handleSubmit = async (values: RegisterProps, formikHelpers: FormikHelpers<RegisterProps>) => {
    const result = await dispatch(register(values));

    register.fulfilled.match(result)
      ? toast.success(`Welcome ${result.payload?.user.firstName}. Please check your email for confirmation`, {
          position: 'bottom-right',
          toastId: 'register-fulfilled',
        })
      : result.payload && formikHelpers.setErrors(result.payload as FormikErrors<RegisterProps>);
  };

  const initialValues: RegisterProps = {
    firstName: '',
    lastName: '',
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

          <Button type="submit" fullWidth>
            Sign Up
          </Button>

          <Grid justify="flex-end" container>
            <Link to={LOGIN}>Already have an account? Sign In</Link>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default Register;

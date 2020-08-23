import React, { FC, useState } from 'react';
import { Formik, FormikHelpers } from 'formik';

import { UpdatePasswordProps } from 'types';
import { validateUpdatePassword } from 'config';
import { http } from 'services';
import Field from 'components/common/formik-field';

import {
  StyledContainer as Container,
  StyledForm as Form,
  HiddenField,
  StyledButton as Button,
  Text,
} from './update-password.styles';

/* -------------------------------------------------------------------------- */

const UpdatePassword: FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (values: UpdatePasswordProps, formikHelpers: FormikHelpers<UpdatePasswordProps>) => {
    try {
      const { data } = await http.put('/users/password', values);

      setMessage(data.message);
    } catch (error) {
      formikHelpers.setErrors(error.response?.data.errors);
    }
  };

  const initialValues: UpdatePasswordProps = {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  return (
    <Container>
      {message ? (
        <Text>{message}</Text>
      ) : (
        <Formik initialValues={initialValues} validationSchema={validateUpdatePassword} onSubmit={handleSubmit}>
          <Form noValidate>
            <HiddenField id="username" name="username" type="text" autoComplete="username" />

            <Field
              id="password"
              name="password"
              label="Current Password"
              variant="outlined"
              margin="normal"
              type="password"
              autoComplete="password"
              size="small"
              fullWidth
              required
            />

            <Field
              id="newPassword"
              name="newPassword"
              label="New Password"
              variant="outlined"
              margin="normal"
              type="password"
              autoComplete="new-password"
              size="small"
              fullWidth
              required
            />

            <Field
              id="confirmNewPassword"
              name="confirmNewPassword"
              label="Confirm New Password"
              variant="outlined"
              margin="normal"
              type="password"
              autoComplete="confirm-new-password"
              size="small"
              fullWidth
              required
            />

            <Button type="submit" size="small" variant="contained" color="primary" fullWidth>
              Update Password
            </Button>
          </Form>
        </Formik>
      )}
    </Container>
  );
};

export default UpdatePassword;

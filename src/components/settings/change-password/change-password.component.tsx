import React, { FC, useState } from 'react';
import { Formik, FormikHelpers } from 'formik';

import { ChangePasswordProps } from 'types';
import { validateChangePassword } from 'config';
import { http } from 'services';
import Field from 'components/common/formik-field';

import {
  StyledContainer as Container,
  StyledForm as Form,
  HiddenField,
  StyledButton as Button,
  Text,
} from './change-password.styles';

/* -------------------------------------------------------------------------- */

const ChangePassword: FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (values: ChangePasswordProps, formikHelpers: FormikHelpers<ChangePasswordProps>) => {
    try {
      const { data } = await http.put('/auth/password', values);

      setMessage(data.message);
    } catch (error) {
      formikHelpers.setErrors(error.response?.data.errors);
    }
  };

  const initialValues: ChangePasswordProps = {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  return (
    <Container>
      {message ? (
        <Text>{message}</Text>
      ) : (
        <Formik initialValues={initialValues} validationSchema={validateChangePassword} onSubmit={handleSubmit}>
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
              Change Password
            </Button>
          </Form>
        </Formik>
      )}
    </Container>
  );
};

export default ChangePassword;

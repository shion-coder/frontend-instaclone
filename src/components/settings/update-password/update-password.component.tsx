import React, { FC, useState } from 'react';
import { Formik, FormikHelpers } from 'formik';

import { UpdatePasswordProps } from 'types';
import { validateUpdatePassword } from 'utils';
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
            <HiddenField name="hidden" />

            <Field name="password" type="password" fullWidth required />

            <Field name="newPassword" type="password" fullWidth required />

            <Field name="confirmNewPassword" type="password" fullWidth required />

            <Button type="submit" fullWidth>
              Update Password
            </Button>
          </Form>
        </Formik>
      )}
    </Container>
  );
};

export default UpdatePassword;

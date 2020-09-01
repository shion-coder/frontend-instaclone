import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, FormikHelpers, FormikErrors } from 'formik';

import { UpdateProfileProps } from 'types';
import { validateUpdateProfile } from 'utils';
import { RootStateProps, Dispatch, updateProfile } from 'store';
import Field from 'components/common/formik-field';

import { StyledContainer as Container, StyledForm as Form, StyledButton as Button } from './update-profile.styles';

/* -------------------------------------------------------------------------- */

const UpdatePassword: FC = () => {
  const { firstName, lastName, username, website, bio, email } = useSelector(
    (state: RootStateProps) => state.user.data,
  );
  const dispatch: Dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values: UpdateProfileProps, formikHelpers: FormikHelpers<UpdateProfileProps>) => {
    const result = await dispatch(updateProfile(values));

    if (updateProfile.fulfilled.match(result)) {
      return history.push(`/${result.payload.user.username}`);
    }

    result.payload && formikHelpers.setErrors(result.payload as FormikErrors<UpdateProfileProps>);
  };

  const initialValues: UpdateProfileProps = {
    firstName: firstName || '',
    lastName: lastName || '',
    username: username || '',
    website: website || '',
    bio: bio || '',
    email: email || '',
  };

  return (
    <Container>
      <Formik initialValues={initialValues} validationSchema={validateUpdateProfile} onSubmit={handleSubmit}>
        <Form noValidate>
          <Field name="firstName" fullWidth required />

          <Field name="lastName" fullWidth />

          <Field name="username" fullWidth required />

          <Field name="website" fullWidth />

          <Field name="bio" multiline rows={4} fullWidth />

          <Field name="email" fullWidth required />

          <Button type="submit" fullWidth>
            Update Profile
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default UpdatePassword;

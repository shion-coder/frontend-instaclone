import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, FormikHelpers, FormikErrors } from 'formik';

import { UpdateProfileProps } from 'types';
import { validateUpdateProfile } from 'config';
import { RootStateProps, Dispatch, profile } from 'store';
import Field from 'components/common/formik-field';

import { StyledContainer as Container, StyledForm as Form, StyledButton as Button } from './update-profile.styles';

/* -------------------------------------------------------------------------- */

const UpdatePassword: FC = () => {
  const { firstName, lastName, username, website, bio, email } = useSelector(
    (state: RootStateProps) => state.auth.user,
  );
  const dispatch: Dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values: UpdateProfileProps, formikHelpers: FormikHelpers<UpdateProfileProps>) => {
    const result = await dispatch(profile(values));

    if (profile.fulfilled.match(result)) {
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
          <Field
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            margin="normal"
            type="text"
            autoComplete="firstName"
            size="small"
            fullWidth
            required
          />

          <Field
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="outlined"
            margin="normal"
            type="text"
            autoComplete="lastName"
            size="small"
            fullWidth
            required
          />

          <Field
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            margin="normal"
            type="text"
            autoComplete="username"
            size="small"
            fullWidth
            required
          />

          <Field
            id="website"
            name="website"
            label="Website"
            variant="outlined"
            margin="normal"
            type="text"
            autoComplete="website"
            size="small"
            fullWidth
            required
          />

          <Field
            id="bio"
            name="bio"
            label="Bio"
            variant="outlined"
            margin="normal"
            type="text"
            autoComplete="bio"
            size="small"
            multiline
            fullWidth
            required
          />

          <Field
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            type="text"
            autoComplete="email"
            size="small"
            fullWidth
            required
          />

          <Button type="submit" size="small" variant="contained" color="primary" fullWidth>
            Update Profile
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default UpdatePassword;

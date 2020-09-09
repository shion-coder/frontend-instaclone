import React, { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';

import { UpdateProfileProps } from 'types';
import { useUser, useResendEmail, useUpdateProfile } from 'hooks';
import { validateUpdateProfile } from 'utils';
import Field from 'components/common/formik-field';

import {
  StyledContainer as Container,
  StyledForm as Form,
  StyledButton as Button,
  Warn,
  Message,
  Resend,
} from './update-profile.styles';

/* -------------------------------------------------------------------------- */

const UpdateProfile: FC = () => {
  const { firstName, lastName, username, website, bio, email, confirmed } = useUser();
  const { resendEmail, isLoading: isLoadingResend, isSuccess, message } = useResendEmail();
  const { updateProfile } = useUpdateProfile();

  /**
   * Handle resend confirm email and submit update profile
   */

  const handleResend = () => resendEmail();

  const handleSubmit = (values: UpdateProfileProps, formik: FormikHelpers<UpdateProfileProps>) =>
    updateProfile({ values, formik });

  const initialValues: UpdateProfileProps = {
    firstName: firstName || '',
    lastName: lastName,
    username: username || '',
    website: website,
    bio: bio,
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

          {!confirmed && (
            <Warn>
              <Message>
                Your email is not confirmed. Please check your email and click on verification link to verify your
                account.
              </Message>

              {isSuccess ? (
                message
              ) : (
                <Resend variant="text" onClick={handleResend} disabled={isLoadingResend}>
                  Resend confirmation email
                </Resend>
              )}
            </Warn>
          )}

          <Button fullWidth>Update Profile</Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default UpdateProfile;

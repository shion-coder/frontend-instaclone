import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, FormikHelpers, FormikErrors } from 'formik';

import { UpdateProfileProps } from 'types';
import { http } from 'services';
import { validateUpdateProfile } from 'utils';
import { RootStateProps, Dispatch, updateProfile } from 'store';
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

const UpdatePassword: FC = () => {
  const { firstName, lastName, username, website, bio, email, confirmed } = useSelector(
    (state: RootStateProps) => state.user.data,
  );
  const dispatch: Dispatch = useDispatch();
  const history = useHistory();

  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  /**
   * Submit update profile
   */

  const handleSubmit = async (values: UpdateProfileProps, formikHelpers: FormikHelpers<UpdateProfileProps>) => {
    const result = await dispatch(updateProfile(values));

    if (updateProfile.fulfilled.match(result)) {
      return history.push(`/${result.payload.user.username}`);
    }

    result.payload && formikHelpers.setErrors(result.payload as FormikErrors<UpdateProfileProps>);
  };

  /**
   * Resend confirmation email
   */

  const handleResend = async () => {
    try {
      setIsSending(true);

      const { data } = await http.get('/users/email/resend');

      setIsSending(false);
      setMessage(data.message);
    } catch (error) {
      setIsSending(false);
      setMessage('Something went wrong');
    }
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
          {!confirmed && (
            <Warn>
              <Message>
                Your email is not confirmed. Please check your email and click on verification link to verify your
                account.
              </Message>

              {message ? (
                message
              ) : (
                <Resend variant="text" onClick={handleResend} disabled={isSending}>
                  Resend confirmation email
                </Resend>
              )}
            </Warn>
          )}

          <Button type="submit" fullWidth>
            Update Profile
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default UpdatePassword;

import * as Yup from 'yup';

import { formMessage } from 'utils';

/* -------------------------------------------------------------------------- */

export const validateUpdateProfile = Yup.object({
  firstName: Yup.string().max(30, formMessage.firstName.maxlength).required(formMessage.firstName.required),
  lastName: Yup.string().max(30, formMessage.lastName.maxlength),
  username: Yup.string().max(30, formMessage.username.maxlength).required(formMessage.username.required),
  website: Yup.string().matches(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    formMessage.website.invalid,
  ),
  email: Yup.string().email(formMessage.email.invalid).required(formMessage.email.required),
});

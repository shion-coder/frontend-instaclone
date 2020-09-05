import * as Yup from 'yup';

import { formMessage } from 'utils';

/* -------------------------------------------------------------------------- */

export const validateLogin = Yup.object({
  usernameOrEmail: Yup.string().required(formMessage.usernameOrEmail.required),
  password: Yup.string().min(6, formMessage.password.minlength).required(formMessage.password.required),
});

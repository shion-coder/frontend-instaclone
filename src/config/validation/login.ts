import * as Yup from 'yup';

/* -------------------------------------------------------------------------- */

export const validateLogin = Yup.object({
  usernameOrEmail: Yup.string().required('Username or email is required'),
  password: Yup.string().required('Password is required'),
});

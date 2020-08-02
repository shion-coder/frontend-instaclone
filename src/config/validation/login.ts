import * as Yup from 'yup';

/* -------------------------------------------------------------------------- */

export const validateLogin = Yup.object({
  usernameOrEmail: Yup.string().required('Username or email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

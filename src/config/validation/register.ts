import * as Yup from 'yup';

/* -------------------------------------------------------------------------- */

export const validateRegister = Yup.object({
  firstName: Yup.string().max(30, 'First Name must be less than 30 characters').required('First Name is required'),
  lastName: Yup.string().max(30, 'Last Name must be less than 30 characters'),
  username: Yup.string().max(30, 'Username must be less than 30 characters').required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm password is required'),
});

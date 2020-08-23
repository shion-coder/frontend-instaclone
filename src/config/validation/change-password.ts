import * as Yup from 'yup';

/* -------------------------------------------------------------------------- */

export const validateChangePassword = Yup.object({
  password: Yup.string().required('Current password is required'),
  newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New password is required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm new password is required'),
});

import * as Yup from 'yup';

import { formMessage } from 'utils';

/* -------------------------------------------------------------------------- */

export const validateUpdatePassword = Yup.object({
  password: Yup.string().min(6, formMessage.newPassword.minlength).required(formMessage.password.required),
  newPassword: Yup.string().min(6, formMessage.newPassword.minlength).required(formMessage.newPassword.required),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], formMessage.confirmNewPassword.notMatch)
    .min(6, formMessage.confirmNewPassword.minlength)
    .required(formMessage.confirmNewPassword.required),
});

import * as Yup from 'yup';

import { formMessage } from 'utils';

/* -------------------------------------------------------------------------- */

export const validateRegisterInformation = Yup.object({
  firstName: Yup.string().max(30, formMessage.firstName.maxlength).required(formMessage.firstName.required),
  lastName: Yup.string().max(30, formMessage.lastName.maxlength),
  username: Yup.string().max(30, formMessage.username.maxlength).required(formMessage.username.required),
  email: Yup.string().email(formMessage.email.invalid).required(formMessage.email.required),
});

export const validateRegisterPassword = Yup.object({
  password: Yup.string().min(6, formMessage.password.minlength).required(formMessage.password.required),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], formMessage.confirmPassword.notMatch)
    .min(6, formMessage.confirmPassword.minlength)
    .required(formMessage.confirmPassword.required),
});

export const validateRegister = Yup.object({
  firstName: Yup.string().max(30, formMessage.firstName.maxlength).required(formMessage.firstName.required),
  lastName: Yup.string().max(30, formMessage.lastName.maxlength),
  username: Yup.string().max(30, formMessage.username.maxlength).required(formMessage.username.required),
  email: Yup.string().email(formMessage.email.invalid).required(formMessage.email.required),
  password: Yup.string().min(6, formMessage.password.minlength).required(formMessage.password.required),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], formMessage.confirmPassword.notMatch)
    .min(6, formMessage.confirmPassword.minlength)
    .required(formMessage.confirmPassword.required),
});

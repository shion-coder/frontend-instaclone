import { MutateFunction, useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { FormikHelpers } from 'formik';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { RegisterProps, ReturnAuthProps, Toast } from 'types';
import { addUser } from 'store';
import { requestRegister } from 'services';

/* -------------------------------------------------------------------------- */

type Variables = {
  values: RegisterProps;
  formik: FormikHelpers<RegisterProps>;
};

type ReturnProps = {
  register: MutateFunction<ReturnAuthProps, AxiosError, Variables>;
  isLoading: boolean;
};

export const useRegister = (): ReturnProps => {
  const dispatch = useDispatch();

  /**
   * Get register function and handle it on error or on success
   */

  const [register, { isLoading }] = useMutation<ReturnAuthProps, AxiosError, Variables>(
    (variables) => requestRegister(variables.values),
    {
      onError: (error, variables) => {
        /**
         * Set formik form errors when error exist
         */

        variables.formik.setErrors(error.response?.data.errors);
      },
      onSuccess: (data) => {
        /**
         * Save user data to user store in redux and toast welcome message
         */

        dispatch(addUser(data));

        toast.success(`Welcome ${data.user.fullName}. Please check your email for confirmation`, {
          toastId: Toast.WELCOME,
        });
      },
    },
  );

  return { register, isLoading };
};

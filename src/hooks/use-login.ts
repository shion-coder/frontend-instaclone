import { MutateFunction, useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { FormikHelpers } from 'formik';

import { LoginProps, ReturnAuthProps } from 'types';
import { useCustomHistory } from 'hooks';
import { addUser } from 'store';
import { requestLogin } from 'services';

/* -------------------------------------------------------------------------- */

type LocationState = {
  from: Location;
};

type Variables = {
  values: LoginProps;
  formik: FormikHelpers<LoginProps>;
};

type ReturnProps = {
  login: MutateFunction<ReturnAuthProps, AxiosError, Variables>;
  isLoading: boolean;
};

export const useLogin = (state?: LocationState): ReturnProps => {
  const dispatch = useDispatch();

  const { goHome, goPathname } = useCustomHistory(null, state?.from.pathname);

  /**
   * Get login function and handle it on error or on success
   */

  const [login, { isLoading }] = useMutation<ReturnAuthProps, AxiosError, Variables>(
    (variables) => requestLogin(variables.values),
    {
      onError: (error, variables) => {
        /**
         * Set formik form errors when error exist
         */

        variables.formik.setErrors(error.response?.data.errors);
      },
      onSuccess: (data) => {
        /**
         * Save user data to user store in redux and switch route to home page or previous page after login
         */

        dispatch(addUser(data));

        state ? goPathname() : goHome();
      },
    },
  );

  return { login, isLoading };
};

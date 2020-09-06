import { MutateFunction, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { FormikHelpers } from 'formik';

import { UpdatePasswordProps } from 'types';
import { useCustomHistory } from 'hooks';
import { requestUpdatePassword } from 'services';

/* -------------------------------------------------------------------------- */

type Variables = {
  values: UpdatePasswordProps;
  formik: FormikHelpers<UpdatePasswordProps>;
};

type ReturnProps = {
  updatePassword: MutateFunction<null, AxiosError, Variables>;
  isLoading: boolean;
};

export const useUpdatePassword = (): ReturnProps => {
  const { goProfile } = useCustomHistory();

  /**
   * Get update password function and handle it on error or on success
   */

  const [updatePassword, { isLoading }] = useMutation<null, AxiosError, Variables>(
    (variables) => requestUpdatePassword(variables.values),
    {
      onError: (error, variables) => {
        /**
         * Set formik form errors when error exist
         */

        variables.formik.setErrors(error.response?.data.errors);
      },
      onSuccess: () => {
        /**
         * Switch route to profile
         */

        goProfile();
      },
    },
  );

  return { updatePassword, isLoading };
};

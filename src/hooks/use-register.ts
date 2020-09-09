import { MutateFunction, useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { RegisterProps, ReturnAuthProps, TOAST } from 'types';
import { addUser } from 'store';
import { requestRegister } from 'services';
import { errorMessage } from 'utils';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  register: MutateFunction<ReturnAuthProps, AxiosError, RegisterProps>;
  isLoading: boolean;
};

export const useRegister = (): ReturnProps => {
  const dispatch = useDispatch();

  /**
   * Get register function and handle it on error or on success
   */

  const [register, { isLoading }] = useMutation<ReturnAuthProps, AxiosError, RegisterProps>(
    (variables) => requestRegister(variables),
    {
      onError: () => {
        /**
         * If error something weird happened because all of your register properties validated
         */

        toast.error(errorMessage.wrong, { toastId: TOAST.WRONG });
      },
      onSuccess: (data) => {
        /**
         * Save user data to user store in redux and toast welcome message
         */

        dispatch(addUser(data));

        toast.success(`Welcome ${data.user.fullName}. Please check your email for confirmation`, {
          toastId: TOAST.WELCOME,
        });
      },
    },
  );

  return { register, isLoading };
};

import { useHistory } from 'react-router-dom';
import { MutateFunction, useMutation, queryCache } from 'react-query';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { FormikHelpers } from 'formik';

import { UpdateProfileProps, ReturnUpdateProfileProps, Query } from 'types';
import { updateUser } from 'store';
import { requestUpdateProfile } from 'services';

/* -------------------------------------------------------------------------- */

type Variables = {
  values: UpdateProfileProps;
  formik: FormikHelpers<UpdateProfileProps>;
};

type ReturnProps = {
  updateProfile: MutateFunction<ReturnUpdateProfileProps, AxiosError, Variables>;
  isLoading: boolean;
};

export const useUpdateProfile = (): ReturnProps => {
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * Get update function and handle it on error or on success
   */

  const [updateProfile, { isLoading }] = useMutation<ReturnUpdateProfileProps, AxiosError, Variables>(
    (variables) => requestUpdateProfile(variables.values),
    {
      onError: (error, variables) => {
        /**
         * Set formik form errors when error exist
         */

        variables.formik.setErrors(error.response?.data.errors);
      },
      onSuccess: (data) => {
        /**
         * Update query cache of this user and update user data in redux store, after that switch to profile route
         */

        queryCache.invalidateQueries([Query.GET_USER, data.user.username]);

        dispatch(updateUser({ ...data.user }));

        history.push(`/${data.user.username}`);
      },
    },
  );

  return { updateProfile, isLoading };
};

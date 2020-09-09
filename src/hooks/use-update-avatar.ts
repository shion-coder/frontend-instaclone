import { RefObject, ChangeEvent, ReactText } from 'react';
import { useMutation, queryCache } from 'react-query';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { ReturnGetUserProps, QUERY, TOAST } from 'types';
import { useUser } from 'hooks';
import { updateUser } from 'store';
import { requestUpdateAvatar } from 'services';
import { useFiles } from './use-files';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => ReactText | void;
  isLoading: boolean;
};

export const useUpdateAvatar = (ref: RefObject<HTMLInputElement>): ReturnProps => {
  const dispatch = useDispatch();

  const { username } = useUser();

  /**
   * Get update avatar function and handle it on error or on success
   */

  const [updateAvatar, { isLoading }] = useMutation((formData: FormData | undefined) => requestUpdateAvatar(formData), {
    onError: (err: AxiosError) => {
      /**
       * Clear input and send toast error
       */

      if (ref.current) {
        ref.current.value = '';
      }

      toast.error(err.response?.data.error, { toastId: TOAST.UPLOAD_ERROR });
    },
    onSuccess: (data) => {
      /**
       * Get previous data then update new avatar in cache and redux store
       */

      const previous = queryCache.getQueryData<ReturnGetUserProps>([QUERY.GET_USER, username]);

      if (!previous) {
        return;
      }

      const { user } = previous;

      queryCache.setQueryData([QUERY.GET_USER, username], { ...previous, user: { ...user, avatar: data.avatar } });

      dispatch(updateUser({ avatar: data.avatar }));
    },
  });

  /**
   * Call useFiles custom hook with ref and update avatar function
   */

  const { handleChange } = useFiles(ref, updateAvatar);

  return { handleChange, isLoading };
};

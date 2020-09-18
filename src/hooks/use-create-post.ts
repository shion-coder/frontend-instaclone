import { useMutation, queryCache } from 'react-query';
import { AxiosError, CancelTokenSource } from 'axios';
import { toast } from 'react-toastify';

import { QUERY, TOAST } from 'types';
import { useUser, useCustomHistory } from 'hooks';
import { requestCreatePost } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  createPost: (formData: FormData | undefined) => void;
  isLoading: boolean;
};

export const useCreatePost = (source: CancelTokenSource, handleClose: () => void): ReturnProps => {
  const { username } = useUser();
  const { goHome } = useCustomHistory();

  /**
   * Get creat post function and handle it on error, on mutate or on success
   */

  const [createPost, { isLoading }] = useMutation(
    (formData: FormData | undefined) => requestCreatePost(formData, source),
    {
      onError: (err: AxiosError) => {
        toast.error(err.response?.data.error, { toastId: TOAST.UPLOAD_ERROR });
      },
      onSuccess: () => {
        handleClose();

        goHome();

        queryCache.invalidateQueries([QUERY.GET_POSTS_FEED, username]);
      },
    },
  );

  return { createPost, isLoading };
};

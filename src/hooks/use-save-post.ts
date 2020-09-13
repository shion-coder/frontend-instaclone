import { useMutation, queryCache } from 'react-query';
import { toast } from 'react-toastify';

import { ReturnGetPostProps, QUERY, TOAST } from 'types';
import { requestSavePost } from 'services';
import { errorMessage } from 'utils';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  savePost: () => void;
  isLoading: boolean;
};

export const useSavePost = (id: string, username: string): ReturnProps => {
  /**
   * Get save post function and handle it on error, on mutate or on success
   */

  const [savePost, { isLoading }] = useMutation(() => requestSavePost(id), {
    onError: () => {
      toast.error(errorMessage.wrong, { toastId: TOAST.WRONG });
    },
    onMutate: () => {
      queryCache.cancelQueries([QUERY.GET_POST, id]);

      /**
       * Update isSaved status
       */

      const previous = queryCache.getQueryData<ReturnGetPostProps>([QUERY.GET_POST, id]);

      if (!previous) {
        return;
      }

      const newPost = {
        ...previous,
        isSaved: !previous.isSaved,
      };

      queryCache.setQueryData([QUERY.GET_POST, id], newPost);
    },
    onSuccess: () => {
      queryCache.invalidateQueries([QUERY.GET_POST, id]);

      queryCache.invalidateQueries([QUERY.GET_SAVED, username]);
    },
  });

  return { savePost, isLoading };
};

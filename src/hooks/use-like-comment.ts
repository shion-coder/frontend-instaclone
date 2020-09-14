import { useMutation, queryCache } from 'react-query';
import { toast } from 'react-toastify';

import { QUERY, TOAST } from 'types';
import { requestLikeComment } from 'services';
import { errorMessage } from 'utils';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  likeComment: () => void;
  isLoading: boolean;
};

export const useLikeComment = (commentId: string, postId: string): ReturnProps => {
  /**
   * Get like comment function and handle it on error, on mutate or on success
   */

  const [likeComment, { isLoading }] = useMutation(() => requestLikeComment(commentId), {
    onError: () => {
      toast.error(errorMessage.wrong, { toastId: TOAST.WRONG });
    },
    onSuccess: () => {
      queryCache.invalidateQueries([QUERY.GET_POST, postId]);

      queryCache.invalidateQueries([QUERY.GET_COMMENTS, postId]);
    },
  });

  return { likeComment, isLoading };
};

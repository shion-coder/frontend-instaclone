import { MutateFunction, useMutation, queryCache } from 'react-query';

import { QUERY } from 'types';
import { requestDeleteComment } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  deletePost: MutateFunction<null, unknown, string>;
  isLoading: boolean;
};

export const useDeleteComment = (postId: string, closeModal: () => void, closeDeleteModal: () => void): ReturnProps => {
  /**
   * Get delete comment function and handle it on error or on success
   */

  const [deletePost, { isLoading }] = useMutation((id: string) => requestDeleteComment(id), {
    onSuccess: () => {
      queryCache.invalidateQueries([QUERY.GET_COMMENTS, postId]);

      closeDeleteModal();
      closeModal();
    },
  });

  return { deletePost, isLoading };
};

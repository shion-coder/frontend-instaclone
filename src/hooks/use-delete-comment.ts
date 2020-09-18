import { Dispatch, SetStateAction } from 'react';
import { MutateFunction, useMutation, queryCache } from 'react-query';

import { ReturnDeleteComment, CommentProps, QUERY } from 'types';
import { requestDeleteComment } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  deleteComment: MutateFunction<ReturnDeleteComment, unknown, string>;
  isLoading: boolean;
};

export const useDeleteComment = (
  postId: string,
  closeModal: () => void,
  closeDeleteModal: () => void,
  setComments?: Dispatch<SetStateAction<CommentProps[]>>,
): ReturnProps => {
  /**
   * Get delete comment function and handle it on error or on success
   */

  const [deleteComment, { isLoading }] = useMutation((id: string) => requestDeleteComment(id), {
    onSuccess: (data) => {
      queryCache.invalidateQueries([QUERY.GET_COMMENTS, postId]);

      closeDeleteModal();
      closeModal();

      setComments && setComments((previous) => previous.filter((comment) => comment._id !== data.id));
    },
  });

  return { deleteComment, isLoading };
};

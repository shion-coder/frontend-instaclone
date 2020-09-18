import { MutateFunction, useMutation, queryCache } from 'react-query';

import { QUERY } from 'types';
import { useUser, useCustomHistory } from 'hooks';
import { requestDeletePost } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  deletePost: MutateFunction<null, unknown, string>;
  isLoading: boolean;
};

export const useDeletePost = (closeModal: () => void, closeDeleteModal: () => void): ReturnProps => {
  const { username } = useUser();
  const { goHome } = useCustomHistory();

  /**
   * Get delete post function and handle it on error or on success
   */

  const [deletePost, { isLoading }] = useMutation((id: string) => requestDeletePost(id), {
    onSuccess: () => {
      closeDeleteModal();
      closeModal();
      goHome();

      queryCache.invalidateQueries([QUERY.GET_POSTS_FEED, username]);
    },
  });

  return { deletePost, isLoading };
};

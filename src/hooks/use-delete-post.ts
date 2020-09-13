import { MutateFunction, useMutation } from 'react-query';

import { useCustomHistory } from 'hooks';
import { requestDeletePost } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  deletePost: MutateFunction<null, unknown, string>;
  isLoading: boolean;
};

export const useDeletePost = (closeModal: () => void, closeDeleteModal: () => void): ReturnProps => {
  const { goHome } = useCustomHistory();

  /**
   * Get delete post function and handle it on error or on success
   */

  const [deletePost, { isLoading }] = useMutation((id: string) => requestDeletePost(id), {
    onSuccess: () => {
      closeDeleteModal();
      closeModal();
      goHome();
    },
  });

  return { deletePost, isLoading };
};

import { useMutation, queryCache } from 'react-query';
import { toast } from 'react-toastify';

import { ReturnGetPostProps, QUERY, TOAST } from 'types';
import { requestLikePost } from 'services';
import { errorMessage } from 'utils';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  likePost: () => void;
  isLoading: boolean;
};

export const useLikePost = (id: string, username: string): ReturnProps => {
  /**
   * Get like post and handle it on error, on mutate or on success
   */

  const [likePost, { isLoading }] = useMutation(() => requestLikePost(id), {
    onError: () => {
      toast.error(errorMessage.wrong, { toastId: TOAST.WRONG });
    },
    onMutate: () => {
      queryCache.cancelQueries([QUERY.GET_POST, id]);

      /**
       * Update post likes and isLiked status
       */

      const previous = queryCache.getQueryData<ReturnGetPostProps>([QUERY.GET_POST, id]);

      if (!previous) {
        return;
      }

      const newPost = {
        ...previous,
        isLiked: !previous.isLiked,
        post: {
          ...previous.post,
          likeCount: previous.isLiked ? previous.post.likeCount - 1 : previous.post.likeCount + 1,
        },
      };

      queryCache.setQueryData([QUERY.GET_POST, id], newPost);
    },
    onSuccess: () => {
      queryCache.invalidateQueries([QUERY.GET_POST, id]);

      queryCache.invalidateQueries([QUERY.GET_POSTS, username]);
    },
  });

  return { likePost, isLoading };
};

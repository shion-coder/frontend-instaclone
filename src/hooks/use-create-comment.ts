import { Dispatch, SetStateAction } from 'react';
import { useMutation, queryCache } from 'react-query';
import { toast } from 'react-toastify';

import { CreateCommentProps, CommentProps, QUERY, TOAST } from 'types';
import { requestCreateComment } from 'services';
import { errorMessage } from 'utils';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  createComment: (values: CreateCommentProps) => void;
  isLoading: boolean;
};

export const useCreateComment = (
  id: string,
  setValue: Dispatch<SetStateAction<string>>,
  setComments?: Dispatch<SetStateAction<CommentProps[]>>,
): ReturnProps => {
  /**
   * Get creat comment function and handle it on error, on mutate or on success
   */

  const [createComment, { isLoading }] = useMutation((values: CreateCommentProps) => requestCreateComment(id, values), {
    onError: () => {
      toast.error(errorMessage.wrong, { toastId: TOAST.WRONG });
    },
    onSuccess: (data) => {
      queryCache.invalidateQueries([QUERY.GET_POST, id]);

      queryCache.invalidateQueries([QUERY.GET_COMMENTS, id]);

      setComments &&
        setComments((previous) => {
          return [data.comment, ...previous];
        });

      setValue('');
    },
  });

  return { createComment, isLoading };
};

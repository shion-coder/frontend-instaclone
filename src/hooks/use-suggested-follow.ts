import { useMutation, queryCache } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { TOAST, QUERY } from 'types';
import { useUser } from 'hooks';
import { requestFollow } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  handleFollow: () => void;
  isLoading: boolean;
};

export const useSuggestedFollow = (usernameToFollow: string, toggleFollow: () => void): ReturnProps => {
  const { username } = useUser();

  /**
   * Get follow function and handle it on error or on success
   */

  const [followUser, { isLoading }] = useMutation(() => requestFollow(usernameToFollow), {
    onError: (err: AxiosError) => {
      toast.error(err.response?.data.error, { toastId: TOAST.FOLLOW_ERROR });
    },
    onSuccess: () => {
      toggleFollow();

      queryCache.invalidateQueries([QUERY.GET_SUGGESTED_USERS, username]);
    },
  });

  /**
   * Handle follow / unfollow user
   */

  const handleFollow = () => {
    followUser();
  };

  return { handleFollow, isLoading };
};

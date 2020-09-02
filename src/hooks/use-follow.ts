import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { ReturnFollowProps } from 'types';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

type Result = {
  handleFollow: () => void;
  isLoading: boolean;
};

export const useFollow = (
  id: string,
  onFollow: (isFollowing: boolean) => void,
  onUnfollow: (isFollowing: boolean) => void,
): Result => {
  const [followUser, { isLoading }] = useMutation(
    () => http.post<ReturnFollowProps>(`/users/${id}/follow`).then((res) => res.data),
    {
      onError: (err: AxiosError) => {
        toast.error(err.response?.data.error, { toastId: 'follow-error' });
      },
      onSuccess: ({ isFollowing }) => {
        if (isFollowing) {
          onFollow(isFollowing);
        } else {
          onUnfollow(isFollowing);
        }
      },
    },
  );

  const handleFollow = () => {
    followUser();
  };

  return { handleFollow, isLoading };
};

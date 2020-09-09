import { Dispatch, SetStateAction, useState } from 'react';
import { useMutation, queryCache } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { ReturnGetUserProps, QUERY, TOAST } from 'types';
import { requestFollow } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  handleFollow: () => void;
  isLoading: boolean;
  userToFollow: ReturnGetUserProps;
};

export const useFollow = (
  userToFollow: ReturnGetUserProps,
  userProfile: ReturnGetUserProps,
  setUserProfile: Dispatch<SetStateAction<ReturnGetUserProps>>,
  route?: 'followers' | 'following',
): ReturnProps => {
  const {
    user: { username },
  } = userToFollow;
  const { isCurrentUser } = userProfile;

  const [newUserToFollow, setNewUserToFollow] = useState(userToFollow);

  /**
   * Get follow function and handle it on error or on success
   */

  const [followUser, { isLoading }] = useMutation(() => requestFollow(username), {
    onError: (err: AxiosError) => {
      toast.error(err.response?.data.error, { toastId: TOAST.FOLLOW_ERROR });
    },
    onSuccess: (data) => {
      /**
       * If use follow button in profile page not in followers or following modal, update followerCount number and isFollowing state
       */

      if (!route) {
        data.isFollowing
          ? setUserProfile((previous) => ({
              ...previous,
              user: { ...previous.user, followerCount: previous.user.followerCount + 1 },
              isFollowing: data.isFollowing,
            }))
          : setUserProfile((previous) => ({
              ...previous,
              user: { ...previous.user, followerCount: previous.user.followerCount - 1 },
              isFollowing: data.isFollowing,
            }));
      } else {
        /**
         * Use follow button in follower modal or following modal, update new isFollowing of user to follow
         */

        setNewUserToFollow((previous) => ({
          ...previous,
          isFollowing: data.isFollowing,
        }));

        /**
         * If use follow button in follower modal or following modal in current user profile page update following count and renew get follow except following,
         * else update all get followers anf following
         */

        if (isCurrentUser) {
          data.isFollowing
            ? setUserProfile((previous) => ({
                ...previous,
                user: { ...previous.user, followingCount: previous.user.followingCount + 1 },
              }))
            : setUserProfile((previous) => ({
                ...previous,
                user: { ...previous.user, followingCount: previous.user.followingCount - 1 },
              }));

          route === 'followers' && queryCache.invalidateQueries([`get-${route}`, userProfile.user.username]);
        } else {
          queryCache.invalidateQueries([`get-${route}`, userProfile.user.username]);
        }
      }

      /**
       * Renew query cache of get user profile later
       */

      return queryCache.invalidateQueries([QUERY.GET_USER, userProfile.user.username]);
    },
  });

  /**
   * Handle follow / unfollow user
   */

  const handleFollow = () => {
    followUser();
  };

  return { handleFollow, isLoading, userToFollow: newUserToFollow };
};

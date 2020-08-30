import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ReturnGetUserProps, FollowProps } from 'types';
import { RootStateProps } from 'store';
import { useFollow } from 'hooks';
import FollowButton from 'components/common/follow-button';

import { Container, StyledAvatar as Avatar, Info, Name, Username, Button } from './user-card.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  user: FollowProps;
  isCurrentUser?: boolean;
  profile: ReturnGetUserProps;
  setNewProfile: Dispatch<SetStateAction<ReturnGetUserProps>>;
  closeModal: () => void;
};

export const UserCard: FC<Props> = ({
  user: {
    user: { _id, avatar, fullName, username },
    isFollowing,
  },
  isCurrentUser,
  profile,
  setNewProfile,
  closeModal,
}) => {
  const {
    user: { followingCount },
  } = profile;

  /**
   * Go to profile when click follower name
   */

  const history = useHistory();

  const handleClick = () => {
    history.push(`/${username}`);

    closeModal();
  };

  /**
   * Handle follow / unfollow
   */

  const [currentFollowing, setCurrentFollowing] = useState(isFollowing);

  const follow = (isFollowing: boolean) => {
    isCurrentUser && setNewProfile({ user: { ...profile.user, followingCount: followingCount + 1 }, isFollowing });

    setCurrentFollowing(isFollowing);
  };

  const unfollow = (isFollowing: boolean) => {
    isCurrentUser && setNewProfile({ user: { ...profile.user, followingCount: followingCount - 1 }, isFollowing });

    setCurrentFollowing(isFollowing);
  };

  const currentUsername = useSelector((state: RootStateProps) => state.user.info.username);

  const { handleFollow, isLoading } = useFollow(_id, follow, unfollow);

  return (
    <Container>
      <Avatar src={avatar} />

      <Info>
        <Name onClick={handleClick}>{fullName}</Name>

        <Username>{username}</Username>
      </Info>

      <Button>
        {currentUsername !== username && (
          <FollowButton isFollowing={currentFollowing} handleFollow={handleFollow} isLoading={isLoading} />
        )}
      </Button>
    </Container>
  );
};

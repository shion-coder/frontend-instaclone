import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FollowerProps } from 'types';
import { RootStateProps } from 'store';
import { useFollow } from 'hooks';
import FollowButton from 'components/common/follow-button';

import { Container, StyledAvatar as Avatar, Info, Name, Username, Button } from './user-card.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser?: boolean;
  follower: FollowerProps;
  onFollow: (isFollowing: boolean) => void;
  onUnFollow: (isFollowing: boolean) => void;
  closeFollowersModal: () => void;
};

const User: FC<Props> = ({
  isCurrentUser,
  follower: {
    user: { _id, avatar, fullName, username },
    isFollowing,
  },
  onFollow,
  onUnFollow,
  closeFollowersModal,
}) => {
  const history = useHistory();
  const [currentFollowing, setCurrentFollowing] = useState(isFollowing);
  const currentUsername = useSelector((state: RootStateProps) => state.user.info.username);

  const handleClick = () => {
    history.push(`/${username}`);

    closeFollowersModal();
  };

  const follow = (isFollowing: boolean) => {
    isCurrentUser && onFollow(isFollowing);
    setCurrentFollowing((previous) => !previous);
  };

  const unfollow = (isFollowing: boolean) => {
    isCurrentUser && onUnFollow(isFollowing);
    setCurrentFollowing((previous) => !previous);
  };

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

export default User;

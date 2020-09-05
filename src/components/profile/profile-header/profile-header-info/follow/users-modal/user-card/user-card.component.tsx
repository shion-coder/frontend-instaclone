import React, { FC, Dispatch, SetStateAction } from 'react';

import { ReturnGetUserProps } from 'types';
import { useCustomHistory, useFollow } from 'hooks';
import FollowButton from 'components/common/follow-button';

import { Container, StyledAvatar as Avatar, Info, Name, Username, Button } from './user-card.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  route: 'followers' | 'following';
  user: ReturnGetUserProps;
  profile: ReturnGetUserProps;
  setUserProfile: Dispatch<SetStateAction<ReturnGetUserProps>>;
  closeModal: () => void;
};

const UserCard: FC<Props> = ({ route, user, profile, setUserProfile, closeModal }) => {
  const {
    user: { username, fullName, avatar },
    isCurrentUser,
  } = user;

  const { goUser } = useCustomHistory(username);
  const { handleFollow, isLoading, userToFollow } = useFollow(user, profile, setUserProfile, route);

  /**
   * Switch to user profile and close modal when click username in modal
   */

  const handleClickName = () => {
    goUser();
    closeModal();
  };

  return (
    <Container>
      <Avatar src={avatar} />

      <Info>
        <Name onClick={handleClickName}>{fullName}</Name>

        <Username>{username}</Username>
      </Info>

      <Button>
        {!isCurrentUser && (
          <FollowButton
            avatar={avatar}
            fullName={fullName}
            isFollowing={userToFollow.isFollowing}
            isLoading={isLoading}
            handleFollow={handleFollow}
          />
        )}
      </Button>
    </Container>
  );
};

export default UserCard;

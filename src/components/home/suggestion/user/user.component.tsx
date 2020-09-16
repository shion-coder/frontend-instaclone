import React, { FC, useState } from 'react';

import { UserProps } from 'types';
import { useCustomHistory, useSuggestedFollow } from 'hooks';
import Avatar from 'components/common/avatar';
import FollowButton from 'components/common/button/follow-button';

import { Container, Info, Name, Username, Button } from './user.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  user: UserProps;
};

const UserSuggest: FC<Props> = ({ user: { fullName, username, avatar } }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => setIsFollowing((previous) => !previous);

  const { goUser } = useCustomHistory(username);
  const { handleFollow, isLoading } = useSuggestedFollow(username, toggleFollow);

  /**
   * Switch to user profile and close modal when click username in modal
   */

  const handleClickName = () => goUser();

  return (
    <Container>
      <Avatar src={avatar} width="3rem" height="3rem" />

      <Info>
        <Name onClick={handleClickName}>{fullName}</Name>

        <Username>{username}</Username>
      </Info>

      <Button>
        <FollowButton
          avatar={avatar}
          fullName={fullName}
          isFollowing={isFollowing}
          isLoading={isLoading}
          handleFollow={handleFollow}
        />
      </Button>
    </Container>
  );
};

export default UserSuggest;

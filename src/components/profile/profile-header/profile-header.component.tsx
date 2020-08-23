import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { UserProps } from 'types';
import { RootStateProps } from 'store';
import Avatar from 'components/profile/profile-header/profile-header-avatar';
import Info from 'components/profile/profile-header/profile-header-info';

import { Container } from './profile-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  user: UserProps;
  refetch: () => Promise<void>;
};

const ProfileHeader: FC<Props> = ({
  user: { avatar, username, fullName, postCount, followerCount, followingCount, bio },
  refetch,
}) => {
  const currentUsername = useSelector((state: RootStateProps) => state.auth.user.username);

  return (
    <Container container justify="center" alignItems="center">
      <Avatar avatar={avatar} isCurrentUser={currentUsername === username} refetch={refetch} />

      <Info
        isCurrentUser={currentUsername === username}
        fullName={fullName}
        postCount={postCount}
        followerCount={followerCount}
        followingCount={followingCount}
        bio={bio}
      />
    </Container>
  );
};

export default ProfileHeader;

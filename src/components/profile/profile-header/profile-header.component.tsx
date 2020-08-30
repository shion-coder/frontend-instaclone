import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { ReturnGetUserProps } from 'types';
import { RootStateProps } from 'store';
import Avatar from './profile-header-avatar';
import Info from './profile-header-info';

import { Container } from './profile-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const ProfileHeader: FC<Props> = ({ profile }) => {
  const {
    user: { avatar, username },
  } = profile;

  const isCurrentUser = useSelector((state: RootStateProps) => state.user.info.username) === username;

  return (
    <Container>
      <Avatar avatar={avatar} isCurrentUser={isCurrentUser} />

      <Info isCurrentUser={isCurrentUser} profile={profile} />
    </Container>
  );
};

export default ProfileHeader;

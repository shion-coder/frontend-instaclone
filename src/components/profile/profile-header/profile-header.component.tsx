import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { GetUserProps } from 'types';
import { RootStateProps } from 'store';
import Avatar from './profile-header-avatar';
import Info from './profile-header-info';

import { Container } from './profile-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: GetUserProps;
};

const ProfileHeader: FC<Props> = ({ data }) => {
  const {
    user: { avatar, username },
  } = data;

  const isCurrentUser = useSelector((state: RootStateProps) => state.user.info.username) === username;

  return (
    <Container>
      <Avatar avatar={avatar} isCurrentUser={isCurrentUser} />

      <Info isCurrentUser={isCurrentUser} data={data} />
    </Container>
  );
};

export default ProfileHeader;

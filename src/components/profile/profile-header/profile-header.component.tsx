import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { GetUserProps } from 'types';
import { RootStateProps } from 'store';
import Avatar from 'components/profile/profile-header/profile-header-avatar';
import Info from 'components/profile/profile-header/profile-header-info';

import { Container } from './profile-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: GetUserProps;
  refetch: () => Promise<GetUserProps | undefined>;
};

const ProfileHeader: FC<Props> = ({ data, refetch }) => {
  const {
    user: { avatar, username },
  } = data;

  const isCurrentUser = useSelector((state: RootStateProps) => state.auth.user.username) === username;

  return (
    <Container container justify="center" alignItems="center">
      <Avatar avatar={avatar} isCurrentUser={isCurrentUser} refetch={refetch} />

      <Info isCurrentUser={isCurrentUser} data={data} refetch={refetch} />
    </Container>
  );
};

export default ProfileHeader;

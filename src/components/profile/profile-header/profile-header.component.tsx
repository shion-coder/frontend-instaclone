import React, { FC } from 'react';

import { ReturnGetUserProps } from 'types';
import Avatar from './profile-header-avatar';
import Info from './profile-header-info';

import { Container } from './profile-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const ProfileHeader: FC<Props> = ({ profile }) => (
  <Container>
    <Avatar profile={profile} />

    <Info profile={profile} />
  </Container>
);

export default ProfileHeader;

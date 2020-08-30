import React, { FC, useState } from 'react';

import { ReturnGetUserProps } from 'types';
import InfoButton from './info-button';
import InfoStats from './info-stats';
import InfoOther from './info-other';

import { Container } from './profile-header-info.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  profile: ReturnGetUserProps;
};

const ProfileHeaderInfo: FC<Props> = ({ isCurrentUser, profile }) => {
  const [newProfile, setNewProfile] = useState(profile);

  return (
    <Container item xs={8} container direction="column">
      <InfoButton isCurrentUser={isCurrentUser} profile={newProfile} setNewProfile={setNewProfile} />

      <InfoStats isCurrentUser={isCurrentUser} profile={newProfile} setNewProfile={setNewProfile} />

      <InfoOther profile={newProfile} />
    </Container>
  );
};

export default ProfileHeaderInfo;

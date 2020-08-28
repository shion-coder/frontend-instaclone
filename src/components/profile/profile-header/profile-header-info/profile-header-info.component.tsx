import React, { FC, useState } from 'react';

import { GetUserProps } from 'types';
import InfoButton from './info-button';
import InfoStats from './info-stats';
import InfoOther from './info-other';

import { Container } from './profile-header-info.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  data: GetUserProps;
};

const ProfileHeaderInfo: FC<Props> = ({ isCurrentUser, data }) => {
  const [newData, setNewData] = useState(data);

  return (
    <Container item xs={8} container direction="column">
      <InfoButton isCurrentUser={isCurrentUser} data={newData} setNewData={setNewData} />

      <InfoStats isCurrentUser={isCurrentUser} data={newData} setNewData={setNewData} />

      <InfoOther data={newData} />
    </Container>
  );
};

export default ProfileHeaderInfo;

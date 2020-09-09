import React, { FC } from 'react';
import { Paper, Grid } from '@material-ui/core';

import { ReturnGetUserProps } from 'types';
import Avatar from './profile-header-avatar';
import Info from './profile-header-info';

import { AvatarContainer, InfoContainer } from './profile-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const ProfileHeader: FC<Props> = ({ profile }) => (
  <Paper elevation={4}>
    <Grid container>
      <AvatarContainer item xs={12} sm={4} container justify="center" alignItems="center">
        <Avatar profile={profile} />
      </AvatarContainer>

      <InfoContainer item xs={12} sm={8}>
        <Info profile={profile} />
      </InfoContainer>
    </Grid>
  </Paper>
);

export default ProfileHeader;

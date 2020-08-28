import React, { FC } from 'react';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import NewPost from 'components/new-post/new-post-button';
import Notification from 'components/notification';

import { Container, Explore, Profile } from './auth.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  explorePath: boolean;
  profilePath: boolean;
  goExplore: () => void;
  goProfile: () => void;
};

const Auth: FC<Props> = ({ explorePath, profilePath, goExplore, goProfile }) => (
  <Container>
    <NewPost />

    <Explore color={explorePath ? 'secondary' : 'primary'} size="small" onClick={goExplore}>
      <ExploreIcon />
    </Explore>

    <Notification />

    <Profile color={profilePath ? 'secondary' : 'primary'} size="small" onClick={goProfile}>
      <AccountCircleIcon />
    </Profile>
  </Container>
);

export default Auth;

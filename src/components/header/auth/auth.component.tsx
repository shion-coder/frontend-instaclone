import React, { FC } from 'react';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import NewPost from 'components/new-post/new-post-button';
import Notifications from 'components/notifications';

import { Container, Explore, Profile } from './auth.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  explorePath: boolean;
  profilePath: boolean;
  goExplore: () => void;
  goUser: () => void;
};

const Auth: FC<Props> = ({ explorePath, profilePath, goExplore, goUser }) => (
  <Container>
    <NewPost />

    <Explore color={explorePath ? 'secondary' : 'primary'} size="small" onClick={goExplore}>
      <ExploreIcon />
    </Explore>

    <Notifications />

    <Profile color={profilePath ? 'secondary' : 'primary'} size="small" onClick={goUser}>
      <AccountCircleIcon />
    </Profile>
  </Container>
);

export default Auth;

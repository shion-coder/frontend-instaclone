import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import NewPostButton from 'components/new-post/new-post-button';
import Notifications from 'components/notifications';

import { Wrapper } from './auth.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  goExplore: () => void;
  goUser: () => void;
};

const Auth: FC<Props> = ({ goExplore, goUser }) => (
  <Wrapper>
    <NewPostButton />

    <IconButton onClick={goExplore}>
      <ExploreIcon />
    </IconButton>

    <Notifications />

    <IconButton onClick={goUser}>
      <AccountCircleIcon />
    </IconButton>
  </Wrapper>
);

export default Auth;

import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { RootStateProps } from 'store';
import { Path } from 'types';
import NewPost from 'components/new-post/new-post-button';
import Notification from 'components/notification';

import { Explore, Profile } from './auth.styles';

/* -------------------------------------------------------------------------- */

const Auth: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const username = useSelector((state: RootStateProps) => state.auth.user.username);

  const { EXPLORE } = Path;
  const goExplore = () => history.push(EXPLORE);
  const goProfile = () => history.push(`/${username}`);

  return (
    <Box>
      <NewPost />

      <Explore color={pathname === EXPLORE ? 'secondary' : 'primary'} size="small" onClick={goExplore}>
        <ExploreIcon />
      </Explore>

      <Notification />

      <Profile color={pathname === `/${username}` ? 'secondary' : 'primary'} size="small" onClick={goProfile}>
        <AccountCircleIcon />
      </Profile>
    </Box>
  );
};

export default Auth;

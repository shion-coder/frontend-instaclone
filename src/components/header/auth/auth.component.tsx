import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Path } from 'types';
import { RootStateProps, logout } from 'store';
import NewPost from 'components/new-post/new-post-button';

import { StyledTypography as Typography, Profile, Logout } from './auth.styles';

/* -------------------------------------------------------------------------- */

const Auth: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const username = useSelector((state: RootStateProps) => state.auth.user.username);
  const dispatch = useDispatch();

  const { DASHBOARD } = Path;

  const goDashboard = () => history.push('/dashboard');
  const goProfile = () => history.push(`/${username}`);
  const handleLogout = () => dispatch(logout());

  return (
    <Box>
      <NewPost />

      <Profile color={pathname === `/${username}` ? 'secondary' : 'primary'} size="small" onClick={goProfile}>
        <AccountCircleIcon />
      </Profile>

      <Typography variant="button" color={pathname === DASHBOARD ? 'secondary' : 'primary'} onClick={goDashboard}>
        Dashboard
      </Typography>

      <Logout color="primary" variant="outlined" onClick={handleLogout}>
        Logout
      </Logout>
    </Box>
  );
};

export default Auth;

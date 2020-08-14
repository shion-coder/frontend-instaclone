import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';

import { Path } from 'types';
import { logout } from 'store';
import NewPost from 'components/new-post/new-post-button';

import { StyledTypography as Typography, Logout } from './auth.styles';

/* -------------------------------------------------------------------------- */

const Auth: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { DASHBOARD } = Path;

  const goDashboard = () => history.push('/dashboard');
  const handleLogout = () => dispatch(logout());

  return (
    <Box>
      <NewPost />

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

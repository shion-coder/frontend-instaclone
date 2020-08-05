import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { Path } from 'types';

import { Register, Login } from './guest.styles';

/* -------------------------------------------------------------------------- */

const Guest: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const { REGISTER, LOGIN } = Path;

  const goRegister = () => history.push('/register');
  const goLogin = () => history.push('/login');

  return (
    <Box>
      <Register color={pathname === REGISTER ? 'secondary' : 'primary'} variant="outlined" onClick={goRegister}>
        Register
      </Register>

      <Login color={pathname === LOGIN ? 'secondary' : 'primary'} variant="outlined" onClick={goLogin}>
        Login
      </Login>
    </Box>
  );
};

export default Guest;

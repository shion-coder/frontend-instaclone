import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootStateProps } from 'store';

import HomeIcon from './home';
import Guest from './guest';
import Auth from './auth';

import { Container } from './header.styles';

/* -------------------------------------------------------------------------- */

const Header: FC = () => {
  const isAuthenticated = useSelector((state: RootStateProps) => state.auth.isAuthenticated);

  return (
    <Container>
      <HomeIcon />

      {!isAuthenticated ? <Guest /> : <Auth />}
    </Container>
  );
};

export default Header;

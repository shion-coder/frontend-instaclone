import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootStateProps } from 'store';

import HomeIcon from './home';
import Guest from './guest';
import Auth from './auth';

import { Container } from './header.styles';

/* -------------------------------------------------------------------------- */

const Header: FC = () => {
  const token = useSelector((state: RootStateProps) => state.auth.token);

  return (
    <Container>
      <HomeIcon />

      {!token ? <Guest /> : <Auth />}
    </Container>
  );
};

export default Header;

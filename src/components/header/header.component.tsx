import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootStateProps } from 'store';

import HomeIcon from './home';
import Guest from './guest';
import Auth from './auth';

import { Wrapper, Container } from './header.styles';

/* -------------------------------------------------------------------------- */

const Header: FC = () => {
  const token = useSelector((state: RootStateProps) => state.auth.token);

  return (
    <Wrapper>
      <Container>
        <HomeIcon />

        {!token ? <Guest /> : <Auth />}
      </Container>
    </Wrapper>
  );
};

export default Header;

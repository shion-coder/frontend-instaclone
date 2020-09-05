import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { Path } from 'types';
import { useUser, useCustomHistory } from 'hooks';
import Auth from './auth';
import Guest from './guest';

import { Wrapper, Container, StyledHomeIcon as HomeIcon } from './header.styles';

/* -------------------------------------------------------------------------- */

const Header: FC = () => {
  const { pathname } = useLocation();

  const { username, token } = useUser();
  const { goHome, goRegister, goLogin, goExplore, goUser } = useCustomHistory(username);

  /**
   * Check current pathname to switch icon color when in correct pathname
   */

  const registerPath = pathname === Path.REGISTER;
  const loginPath = pathname === Path.LOGIN;
  const explorePath = pathname === Path.EXPLORE;
  const profilePath =
    pathname === `/${username}` ||
    pathname === `/${username}/posts` ||
    pathname === `/${username}/saved` ||
    pathname === `/${username}/tagged`;

  return (
    <Wrapper>
      <Container>
        <HomeIcon color={pathname === Path.HOME ? 'secondary' : 'primary'} onClick={goHome} />

        {token ? (
          <Auth explorePath={explorePath} profilePath={profilePath} goExplore={goExplore} goUser={goUser} />
        ) : (
          <Guest registerPath={registerPath} loginPath={loginPath} goRegister={goRegister} goLogin={goLogin} />
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;

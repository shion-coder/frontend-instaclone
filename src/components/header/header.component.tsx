import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { Path } from 'types';
import { RootStateProps } from 'store';
import Guest from './guest';
import Auth from './auth';

import { Wrapper, Container, StyledHomeIcon as HomeIcon } from './header.styles';

/* -------------------------------------------------------------------------- */

const Header: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const token = useSelector((state: RootStateProps) => state.user.token);
  const username = useSelector((state: RootStateProps) => state.user.info.username);

  const { HOME, REGISTER, LOGIN, EXPLORE } = Path;

  /**
   * Check current pathname to switch icon color when in correct pathname
   */

  const registerPath = pathname === REGISTER;
  const loginPath = pathname === LOGIN;
  const explorePath = pathname === EXPLORE;
  const profilePath =
    pathname === `/${username}` ||
    pathname === `/${username}/posts` ||
    pathname === `/${username}/saved` ||
    pathname === `/${username}/tagged`;

  /**
   * Go to route
   */

  const goHome = () => history.push(HOME);
  const goRegister = () => history.push(REGISTER);
  const goLogin = () => history.push(LOGIN);
  const goExplore = () => history.push(EXPLORE);
  const goProfile = () => history.push(`/${username}`);

  return (
    <Wrapper>
      <Container>
        <HomeIcon color={pathname === HOME ? 'secondary' : 'primary'} onClick={goHome} />

        {!token ? (
          <Guest registerPath={registerPath} loginPath={loginPath} goRegister={goRegister} goLogin={goLogin} />
        ) : (
          <Auth explorePath={explorePath} profilePath={profilePath} goExplore={goExplore} goProfile={goProfile} />
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;

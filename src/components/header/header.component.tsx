import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import { useUser, useCustomHistory } from 'hooks';
import Auth from './auth';
import Guest from './guest';

import { StyledAppBar as AppBar, StyledToolbar as Toolbar, LogoContainer, Logo } from './header.styles';

/* -------------------------------------------------------------------------- */

const Header: FC = () => {
  const { username, token } = useUser();
  const { goHome, goRegister, goLogin, goExplore, goUser } = useCustomHistory(username);

  return (
    <AppBar position="sticky" color="transparent">
      <Container maxWidth="lg">
        <Toolbar>
          <LogoContainer onClick={goHome}>
            <Logo />
          </LogoContainer>

          {token ? <Auth goExplore={goExplore} goUser={goUser} /> : <Guest goRegister={goRegister} goLogin={goLogin} />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

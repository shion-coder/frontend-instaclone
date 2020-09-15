import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import NewPostButton from 'components/new-post/new-post-button';
import Notifications from 'components/notifications';

import { Wrapper, Search, SearchIconContainer, StyledInputBase as InputBase } from './auth.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  goExplore: () => void;
  goUser: () => void;
};

const Auth: FC<Props> = ({ goExplore, goUser }) => {
  return (
    <Wrapper>
      <Search>
        <SearchIconContainer>
          <SearchIcon fontSize="small" />
        </SearchIconContainer>

        <InputBase placeholder="Search …" />
      </Search>

      <NewPostButton />

      <IconButton onClick={goExplore}>
        <ExploreIcon />
      </IconButton>

      <Notifications />

      <IconButton onClick={goUser}>
        <AccountCircleIcon />
      </IconButton>
    </Wrapper>
  );
};

export default Auth;

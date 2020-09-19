import React, { FC, ChangeEvent, FocusEvent, useState, useRef, useCallback } from 'react';
import { IconButton } from '@material-ui/core';
import { debounce } from 'lodash-es';
import SearchIcon from '@material-ui/icons/Search';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useClickOutside } from 'hooks';
import NewPostButton from 'components/new-post/new-post-button';
import Notifications from 'components/notifications';
import Popup from './search-popup';

import { Wrapper, Search, SearchIconContainer, StyledInputBase as InputBase } from './auth.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  goExplore: () => void;
  goUser: () => void;
};

const Auth: FC<Props> = ({ goExplore, goUser }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState('');

  const debounceFetch = useCallback(
    debounce((value) => setSearchValue(value), 1000),
    [],
  );

  /**
   * Handle search field and popup
   */

  const handleClose = () => setSearchValue('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => debounceFetch(e.target.value);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  useClickOutside(ref, handleClose);

  return (
    <Wrapper>
      <Search ref={ref} search={searchValue}>
        <SearchIconContainer>
          <SearchIcon fontSize="small" />
        </SearchIconContainer>

        <InputBase placeholder="Search …" onChange={handleChange} onFocus={handleFocus} search={searchValue ? 1 : 0} />

        {searchValue && <Popup searchValue={searchValue} handleClose={handleClose} />}
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

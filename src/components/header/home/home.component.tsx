import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SvgIcon } from '@material-ui/core';

import { Path } from 'types';

import { Icon } from './home.styles';

/* -------------------------------------------------------------------------- */

const Home: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { HOME } = Path;

  const goHome = () => history.push('/');

  return (
    <SvgIcon color={pathname === HOME ? 'secondary' : 'primary'} fontSize="large" onClick={goHome}>
      <Icon d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

/* -------------------------------------------------------------------------- */

export default Home;

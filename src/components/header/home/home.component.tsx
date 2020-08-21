import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Path } from 'types';

import { Icon, Svg } from './home.styles';

/* -------------------------------------------------------------------------- */

const Home: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const { HOME } = Path;

  const goHome = () => history.push('/');

  return (
    <Svg color={pathname === HOME ? 'secondary' : 'primary'} fontSize="large" onClick={goHome}>
      <Icon d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Svg>
  );
};

/* -------------------------------------------------------------------------- */

export default Home;

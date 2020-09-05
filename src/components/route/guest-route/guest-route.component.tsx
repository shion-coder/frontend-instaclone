import React, { FC } from 'react';
import { RouteProps as Props, Route, Redirect } from 'react-router-dom';

import { Path } from 'types';
import { useUser } from 'hooks';

/* -------------------------------------------------------------------------- */

const GuestRoute: FC<Props> = (props) => {
  const { token } = useUser();

  return token ? <Redirect to={Path.HOME} /> : <Route {...props} />;
};

export default GuestRoute;

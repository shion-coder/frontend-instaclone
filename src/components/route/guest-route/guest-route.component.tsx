import React, { FC } from 'react';
import { RouteProps as Props, Route, Redirect } from 'react-router-dom';

import { PATH } from 'types';
import { useUser } from 'hooks';

/* -------------------------------------------------------------------------- */

const GuestRoute: FC<Props> = (props) => {
  const { token } = useUser();

  return token ? <Redirect to={PATH.HOME} /> : <Route {...props} />;
};

export default GuestRoute;

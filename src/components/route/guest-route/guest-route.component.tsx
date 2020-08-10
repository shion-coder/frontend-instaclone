import React, { FC } from 'react';
import { Route, Redirect, RouteProps as Props } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootStateProps } from 'store';

/* -------------------------------------------------------------------------- */

const GuestRoute: FC<Props> = (props) => {
  const isAuthenticated = useSelector((state: RootStateProps) => state.auth.isAuthenticated);

  return isAuthenticated ? <Redirect to="/" /> : <Route {...props} />;
};

export default GuestRoute;

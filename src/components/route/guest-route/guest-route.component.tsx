import React, { FC } from 'react';
import { Route, Redirect, RouteProps as Props } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootStateProps } from 'store';

/* -------------------------------------------------------------------------- */

const GuestRoute: FC<Props> = (props) => {
  const token = useSelector((state: RootStateProps) => state.auth.token);

  return token ? <Redirect to="/" /> : <Route {...props} />;
};

export default GuestRoute;

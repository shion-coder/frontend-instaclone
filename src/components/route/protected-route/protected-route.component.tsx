import React, { FC } from 'react';
import { Route, Redirect, RouteProps as Props } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootStateProps } from 'store';

/* -------------------------------------------------------------------------- */

const ProtectedRoute: FC<Props> = (props) => {
  const token = useSelector((state: RootStateProps) => state.auth.token);

  return token ? <Route {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
};

export default ProtectedRoute;

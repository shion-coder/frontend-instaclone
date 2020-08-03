import React, { FC } from 'react';
import { Route, Redirect, RouteProps as Props } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootStateProps } from 'store';
import { setAuthorizationHeader } from 'services';

/* -------------------------------------------------------------------------- */

const ProtectedRoute: FC<Props> = (props) => {
  const token = useSelector((state: RootStateProps) => state.auth.token);

  /**
   * Set default header with token
   */

  setAuthorizationHeader(token);

  return token ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: props.location },
      }}
    />
  );
};

export default ProtectedRoute;

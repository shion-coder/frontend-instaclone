import React, { FC } from 'react';
import { Route, Redirect, RouteProps as Props } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { RootStateProps, logout } from 'store';
import { setAuthorizationHeader } from 'services';

/* -------------------------------------------------------------------------- */

const ProtectedRoute: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const token = useSelector((state: RootStateProps) => state.auth.token);

  type DecodeProps = {
    id: string;
    exp: number;
    iat: number;
  };

  if (token) {
    const decoded = decode<DecodeProps>(token);

    decoded.exp < Date.now() / 1000 ? dispatch(logout()) : setAuthorizationHeader(token);

    return <Route {...props} />;
  }

  return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
};

export default ProtectedRoute;

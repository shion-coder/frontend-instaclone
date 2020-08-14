import React, { FC, useEffect } from 'react';
import { Route, Redirect, RouteProps as Props, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { DecodeProps } from 'types';
import { RootStateProps, logout } from 'store';
import { setAuthorizationHeader } from 'services';

/* -------------------------------------------------------------------------- */

const ProtectedRoute: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector((state: RootStateProps) => state.auth.token);
  let expired = false;

  useEffect(() => {
    expired ? history.push('/login') : setAuthorizationHeader(token);

    return () => {
      expired && dispatch(logout());
    };
  }, [expired, history, token, dispatch]);

  if (!token) {
    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
  }

  const decoded = decode<DecodeProps>(token);

  expired = decoded.exp < Date.now() / 1000;

  return <Route {...props} />;
};

export default ProtectedRoute;

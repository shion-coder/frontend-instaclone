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

  /**
   * Check whether token expired or not, if expired then redirect to login page and logout user when component unmount to
   * prevent error "Cannot update a component while rendering a different component"
   */

  useEffect(() => {
    expired ? history.push('/login') : setAuthorizationHeader(token);

    return () => {
      expired && dispatch(logout());
    };
  }, [expired, history, token, dispatch]);

  /**
   * Redirect to login page if token not exist
   */

  if (!token) {
    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
  }

  /**
   * If token exist then decode token to get expired value and return route
   */

  const decoded = decode<DecodeProps>(token);

  expired = decoded.exp < Date.now() / 1000;

  return <Route {...props} />;
};

export default ProtectedRoute;

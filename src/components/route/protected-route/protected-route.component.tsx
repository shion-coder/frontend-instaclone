import React, { FC } from 'react';
import { RouteProps as Props, Route, Redirect } from 'react-router-dom';

import { Path } from 'types';
import { useUser } from 'hooks';

/* -------------------------------------------------------------------------- */

const ProtectedRoute: FC<Props> = (props) => {
  const { token } = useUser();

  return token ? <Route {...props} /> : <Redirect to={{ pathname: Path.LOGIN, state: { from: props.location } }} />;
};

export default ProtectedRoute;

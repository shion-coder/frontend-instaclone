import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from 'components/loader-lottie';

/* -------------------------------------------------------------------------- */

/**
 * Lazy loading
 */

const Home = lazy(() => import('pages/home'));
const NotFound = lazy(() => import('pages/not-found'));
const Register = lazy(() => import('pages/register'));
const Login = lazy(() => import('pages/login'));

const App: FC = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />

      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default App;

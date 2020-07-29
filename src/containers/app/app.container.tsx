import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from 'components/loading-lottie';

/* -------------------------------------------------------------------------- */

/**
 * Lazy loading
 */

const Home = lazy(() => import('pages/home'));
const NotFound = lazy(() => import('pages/not-found'));

const App: FC = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default App;

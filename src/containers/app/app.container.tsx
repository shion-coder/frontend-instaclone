import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoadingLottie from 'components/loading-lottie';

/* -------------------------------------------------------------------------- */

/**
 * Lazy loading
 */

const Home = lazy(() => import('pages/home'));

const App: FC = () => (
  <Suspense fallback={<LoadingLottie />}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Suspense>
);

export default App;

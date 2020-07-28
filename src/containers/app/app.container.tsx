import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from 'components/loading';

/* -------------------------------------------------------------------------- */

/**
 * Lazy loading
 */

const Home = lazy(() => import('pages/home'));

const App: FC = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Suspense>
);

export default App;

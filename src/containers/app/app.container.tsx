import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Path } from 'types';
import Header from 'components/header';
import Footer from 'components/footer';
import Loader from 'components/loader/lottie-loader';
import GuestRoute from 'components/route/guest-route';
import ProtectedRoute from 'components/route/protected-route';

import { Container, Body } from './app.styles';

/* -------------------------------------------------------------------------- */

/**
 * Lazy loading
 */

const Home = lazy(() =>
  Promise.all([import('pages/home'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const Register = lazy(() =>
  Promise.all([import('pages/register'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const Login = lazy(() =>
  Promise.all([import('pages/login'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const Confirm = lazy(() =>
  Promise.all([import('pages/confirm'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const Explore = lazy(() =>
  Promise.all([import('pages/explore'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const Profile = lazy(() =>
  Promise.all([import('pages/profile'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const Settings = lazy(() =>
  Promise.all([import('pages/settings'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const Test = lazy(() => import('pages/test'));

const App: FC = () => (
  <Container>
    <Header />

    <Body>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={Path.HOME} component={Home} />
          <Route exact path={Path.CONFIRM} component={Confirm} />
          <Route exact path={Path.TEST} component={Test} />

          <GuestRoute exact path={Path.REGISTER} component={Register} />
          <GuestRoute exact path={Path.LOGIN} component={Login} />

          <ProtectedRoute path={Path.SETTINGS} component={Settings} />
          <ProtectedRoute exact path={Path.EXPLORE} component={Explore} />
          <ProtectedRoute exact path={Path.PROFILE} component={Profile} />

          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Body>

    <Footer />
  </Container>
);

export default App;

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

const { HOME, REGISTER, LOGIN, LIST, DASHBOARD, CONFIRM } = Path;

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

const Dashboard = lazy(() =>
  Promise.all([import('pages/dashboard'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const Confirm = lazy(() =>
  Promise.all([import('pages/confirm'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const List = lazy(() =>
  Promise.all([import('pages/list'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const App: FC = () => (
  <Container>
    <Header />

    <Body>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={CONFIRM} component={Confirm} />
          <Route exact path={LIST} component={List} />

          <GuestRoute exact path={REGISTER} component={Register} />
          <GuestRoute exact path={LOGIN} component={Login} />

          <ProtectedRoute exact path={DASHBOARD} component={Dashboard} />

          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Body>

    <Footer />
  </Container>
);

export default App;

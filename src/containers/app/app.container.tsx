import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

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

const { HOME, REGISTER, LOGIN, DASHBOARD } = Path;

const Home = lazy(() => import('pages/home'));
const NotFound = lazy(() => import('pages/not-found'));
const Register = lazy(() => import('pages/register'));
const Login = lazy(() => import('pages/login'));
const Dashboard = lazy(() => import('pages/dashboard'));

const App: FC = () => (
  <Container>
    <Header />

    <Body>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={HOME} component={Home} />

          <GuestRoute exact path={REGISTER} component={Register} />
          <GuestRoute exact path={LOGIN} component={Login} />

          <ProtectedRoute exact path={DASHBOARD} component={Dashboard} />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Body>

    <Footer />
  </Container>
);

export default App;

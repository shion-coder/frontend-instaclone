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

const Home = lazy(() => import('pages/home'));

const Register = lazy(() => import('pages/register'));

const Login = lazy(() => import('pages/login'));

const Confirm = lazy(() => import('pages/confirm'));

const Explore = lazy(() => import('pages/explore'));

const Profile = lazy(() => import('pages/profile'));

const Settings = lazy(() => import('pages/settings'));

const Post = lazy(() => import('pages/post'));

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

          <ProtectedRoute path={Path.POST} component={Post} />
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

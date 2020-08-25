import React, { FC, Suspense, lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Path } from 'types';
import { RootStateProps, fetchNotifications } from 'store';
import Header from 'components/header';
import Footer from 'components/footer';
import Loader from 'components/loader/lottie-loader';
import GuestRoute from 'components/route/guest-route';
import ProtectedRoute from 'components/route/protected-route';

import { Container, Body } from './app.styles';

/* -------------------------------------------------------------------------- */

const { HOME, REGISTER, LOGIN, DASHBOARD, CONFIRM, EXPLORE, PROFILE, SETTINGS, TEST } = Path;

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

const Test = lazy(() =>
  Promise.all([import('pages/test'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    ([moduleExports]) => moduleExports,
  ),
);

const App: FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootStateProps) => state.auth.token);

  useEffect(() => {
    token && dispatch(fetchNotifications());
  }, [token, dispatch]);

  return (
    <Container>
      <Header />

      <Body>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route exact path={CONFIRM} component={Confirm} />
            <Route exact path={TEST} component={Test} />

            <GuestRoute exact path={REGISTER} component={Register} />
            <GuestRoute exact path={LOGIN} component={Login} />

            <ProtectedRoute exact path={DASHBOARD} component={Dashboard} />
            <ProtectedRoute exact path={EXPLORE} component={Explore} />
            <ProtectedRoute exact path={SETTINGS} component={Settings} />
            <ProtectedRoute exact path={PROFILE} component={Profile} />

            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </Body>

      <Footer />
    </Container>
  );
};

export default App;

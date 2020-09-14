import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PATH } from 'types';
import Header from 'components/header';
import Footer from 'components/footer';
import Loader from 'components/loader/lottie-loader';
import GuestRoute from 'components/route/guest-route';
import ProtectedRoute from 'components/route/protected-route';

import { StyledParticles as Particles, Wrapper, Main } from './app.styles';

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

const Confirm = lazy(() => import('pages/confirm'));

const Explore = lazy(() => import('pages/explore'));

const Profile = lazy(() => import('pages/profile'));

const Settings = lazy(() => import('pages/settings'));

const Post = lazy(() => import('pages/post'));

const Test = lazy(() => import('pages/test'));

const App: FC = () => (
  <>
    <Particles />

    <Wrapper>
      <Header />

      <Main>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={PATH.HOME} component={Home} />
            <Route exact path={PATH.CONFIRM} component={Confirm} />
            <Route exact path={PATH.TEST} component={Test} />

            <GuestRoute exact path={PATH.REGISTER} component={Register} />
            <GuestRoute exact path={PATH.LOGIN} component={Login} />

            <ProtectedRoute path={PATH.POST} component={Post} />
            <ProtectedRoute path={PATH.SETTINGS} component={Settings} />
            <ProtectedRoute exact path={PATH.EXPLORE} component={Explore} />
            <ProtectedRoute exact path={PATH.PROFILE} component={Profile} />

            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </Main>

      <Footer />
    </Wrapper>
  </>
);

export default App;

import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';

import Store from 'containers/store';
import Theme from 'containers/theme';
import App from 'containers/app';

import { StyledToastContainer as ToastContainer } from './root.styles';

/* -------------------------------------------------------------------------- */

const Root: FC = () => (
  <Store>
    <Theme>
      <ToastContainer limit={3} />

      <Router>
        <App />
      </Router>

      <ReactQueryDevtools initialIsOpen={false} />
    </Theme>
  </Store>
);

export default Root;

import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';

import Store from 'containers/store';
import Contexts from 'containers/contexts';
import Theme from 'containers/theme';
import App from 'containers/app';

import { StyledToastContainer as ToastContainer } from './root.styles';

/* -------------------------------------------------------------------------- */

const Root: FC = () => (
  <Store>
    <Contexts>
      <Theme>
        <ToastContainer limit={3} />

        <Router>
          <App />
        </Router>

        <ReactQueryDevtools initialIsOpen={false} />
      </Theme>
    </Contexts>
  </Store>
);

export default Root;

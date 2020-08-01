import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Store from 'containers/store';
import Theme from 'containers/theme';
import App from 'containers/app';

import { StyledToastContainer as ToastContainer } from './root.styles';

/* -------------------------------------------------------------------------- */

const Root: FC = () => (
  <Store>
    <Theme>
      <ToastContainer />

      <Router>
        <App />
      </Router>
    </Theme>
  </Store>
);

export default Root;

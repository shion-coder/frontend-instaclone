import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Redux from 'containers/redux';
import Theme from 'containers/theme';
import App from 'containers/app';

import { StyledToastContainer as ToastContainer } from './root.styles';

/* -------------------------------------------------------------------------- */

const Root: FC = () => (
  <Redux>
    <Theme>
      <ToastContainer />

      <Router>
        <App />
      </Router>
    </Theme>
  </Redux>
);

export default Root;

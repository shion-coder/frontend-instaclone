import React from 'react';
import ReactDOM from 'react-dom';

import { logger } from 'services';
import Root from 'containers/root';

/* -------------------------------------------------------------------------- */

logger.init();

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);

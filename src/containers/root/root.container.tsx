import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from 'containers/app';

import { theme, GlobalStyle } from 'styles';

/* -------------------------------------------------------------------------- */

const Root: FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default Root;

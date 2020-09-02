import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactQueryConfigProvider } from 'react-query';

import { store, persistor } from 'store';

/* -------------------------------------------------------------------------- */

const queryConfig = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
  },
};

const Store: FC = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ReactQueryConfigProvider config={queryConfig}>{children}</ReactQueryConfigProvider>
    </PersistGate>
  </Provider>
);

export default Store;

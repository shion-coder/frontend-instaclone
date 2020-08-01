import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'store';

/* -------------------------------------------------------------------------- */

const Store: FC = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);

Store.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Store;

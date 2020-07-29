import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

/* -------------------------------------------------------------------------- */

const Redux: FC = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);

Redux.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Redux;

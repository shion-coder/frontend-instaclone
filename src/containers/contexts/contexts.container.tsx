import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { SocketProvider } from 'contexts/socket';

/* -------------------------------------------------------------------------- */

const Contexts: FC = ({ children }) => <SocketProvider>{children}</SocketProvider>;

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contexts;

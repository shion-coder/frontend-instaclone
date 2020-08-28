import React, { FC } from 'react';

import { SocketProvider } from 'contexts/socket';

/* -------------------------------------------------------------------------- */

const Contexts: FC = ({ children }) => <SocketProvider>{children}</SocketProvider>;

export default Contexts;

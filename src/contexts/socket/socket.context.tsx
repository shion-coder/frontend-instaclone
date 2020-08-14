import React, { FC, createContext, useEffect, useState, useContext } from 'react';
import socketIo from 'socket.io-client';

import { API_URL } from 'config';

/* -------------------------------------------------------------------------- */

const SocketContext = createContext<SocketIOClient.Socket | null>(null);

export const SocketProvider: FC = ({ children }) => {
  const [io, setIo] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    const socket = socketIo(`${API_URL}`);

    setIo(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={io}>{children}</SocketContext.Provider>;
};

export const useSocket = (): SocketIOClient.Socket | null => {
  const io = useContext(SocketContext);

  return io;
};

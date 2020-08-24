import React, { FC, createContext, useEffect, useState, useContext } from 'react';
import socketIo, { Socket } from 'socket.io-client';
import { useSelector } from 'react-redux';

import { API_URL } from 'config';
import { RootStateProps } from 'store';

/* -------------------------------------------------------------------------- */

const SocketContext = createContext<SocketIOClient.Socket | null>(null);

export const SocketProvider: FC = ({ children }) => {
  const [io, setIo] = useState<SocketIOClient.Socket | null>(null);
  const token = useSelector((state: RootStateProps) => state.auth.token);

  useEffect(() => {
    let socket: SocketIOClient.Socket;

    if (!token) {
      socket = socketIo(API_URL);
    } else {
      socket = socketIo(API_URL, {
        query: { token },
      });
    }

    setIo(socket);

    return () => {
      socket.disconnect();
    };
  }, [token]);

  return <SocketContext.Provider value={io}>{children}</SocketContext.Provider>;
};

export const useSocket = (): SocketIOClient.Socket | null => {
  const io = useContext(SocketContext);

  return io;
};

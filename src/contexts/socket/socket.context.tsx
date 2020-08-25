import React, { FC, createContext, useEffect, useState, useContext } from 'react';
import socketIo from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';

import { API_URL } from 'config';
import { NotificationProps, SocketEvent } from 'types';
import { RootStateProps, addNotification } from 'store';

/* -------------------------------------------------------------------------- */

const SocketContext = createContext<SocketIOClient.Socket | null>(null);

export const SocketProvider: FC = ({ children }) => {
  const [io, setIo] = useState<SocketIOClient.Socket | null>(null);
  const token = useSelector((state: RootStateProps) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    let socket: SocketIOClient.Socket;

    if (!token) {
      socket = socketIo(API_URL);
    } else {
      socket = socketIo(API_URL, {
        query: { token },
      });

      socket.on(SocketEvent.NEW_NOTIFICATION, (data: NotificationProps) => {
        dispatch(addNotification(data));
      });
    }

    setIo(socket);

    return () => {
      socket.disconnect();
    };
  }, [token, dispatch]);

  return <SocketContext.Provider value={io}>{children}</SocketContext.Provider>;
};

export const useSocket = (): SocketIOClient.Socket | null => {
  const io = useContext(SocketContext);

  return io;
};

export const useSocketListener = <T extends Record<string, unknown>>(event: string, fn: (value: T) => void): void => {
  const io = useSocket();

  useEffect(() => {
    io?.on(event, fn);

    return () => {
      io?.off(event, fn);
    };
  }, [event, fn, io]);
};

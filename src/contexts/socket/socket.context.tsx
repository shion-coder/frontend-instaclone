import React, { FC, createContext, useState, useContext, useEffect } from 'react';
import { queryCache } from 'react-query';
import socketIo from 'socket.io-client';

import { SocketEvent, Query } from 'types';
import { API_URL } from 'config';
import { useUser } from 'hooks';

/* -------------------------------------------------------------------------- */

const SocketContext = createContext<SocketIOClient.Socket | null>(null);

export const SocketProvider: FC = ({ children }) => {
  const [io, setIo] = useState<SocketIOClient.Socket | null>(null);

  const { token } = useUser();

  /**
   * Set socket and listen for new notification event
   */

  useEffect(() => {
    let socket: SocketIOClient.Socket;

    if (!token) {
      socket = socketIo(API_URL);
    } else {
      socket = socketIo(API_URL, {
        query: { token },
      });

      socket.on(SocketEvent.NEW_NOTIFICATION, () => {
        queryCache.invalidateQueries(Query.GET_NOTIFICATIONS);
      });
    }

    setIo(socket);

    return () => {
      socket.disconnect();
    };
  }, [token]);

  return <SocketContext.Provider value={io}>{children}</SocketContext.Provider>;
};

/**
 * Hook return socket io
 */

export const useSocket = (): SocketIOClient.Socket | null => {
  const io = useContext(SocketContext);

  return io;
};

/**
 * Hook return socket event listener
 */

export const useSocketListener = <T extends Record<string, unknown>>(event: string, fn: (value: T) => void): void => {
  const io = useSocket();

  useEffect(() => {
    io?.on(event, fn);

    return () => {
      io?.off(event, fn);
    };
  }, [event, fn, io]);
};

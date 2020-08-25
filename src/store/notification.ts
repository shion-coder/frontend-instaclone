import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { GetNotificationsProps, Errors } from 'types';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

/**
 * Handle async with thunk
 */

export const fetchNotifications = createAsyncThunk('notification/fetch', async () => {
  try {
    const endpoint = '/notification';
    const { data } = await http.get<GetNotificationsProps>(endpoint);

    return data;
  } catch (error) {
    const exception: AxiosError<Errors> = error;

    if (!exception.response) {
      throw exception;
    }
  }
});

/**
 * Initial State type and values
 */

type StateProps = {
  notifications: {
    _id: string;
    notificationType: string;
    notificationData?: Record<string, unknown>;
    sender: {
      fistName: string;
      lastName: string;
      username: string;
      email: string;
      avatar: string;
      followers: string[];
    };
    receiver: string;
    read: boolean;
    date: string;
  }[];
  unread: number;
};

const initialState: StateProps = {
  notifications: [],
  unread: 0,
};

/**
 * Auth slice
 */

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, { payload }) => {
      if (payload) {
        state.notifications.push(payload);
        state.unread = state.unread + 1;
      }
    },
    clearNotification: (state) => {
      state.notifications = [];
      state.unread = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, { payload }) => {
      if (payload) {
        state.notifications = payload.notifications;
        state.unread = payload.notifications.filter((notification) => notification.read === false).length;
      }
    });
  },
});

export const { addNotification, clearNotification } = notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;

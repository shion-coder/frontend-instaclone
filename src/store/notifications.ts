import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ReturnGetNotificationsProps, NotificationProps, Errors } from 'types';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

/**
 * Handle async with thunk
 */

export const fetchNotifications = createAsyncThunk('notification/fetch', async () => {
  try {
    const endpoint = '/notifications/0';
    const { data } = await http.get<ReturnGetNotificationsProps>(endpoint);

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
  data: NotificationProps[];
  unread: number;
  next: number;
};

const initialState: StateProps = {
  data: [],
  unread: 0,
  next: 0,
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
        state.data.unshift(payload);
        state.unread = state.unread + 1;
        state.next = state.next + 1;
      }
    },
    clearNotification: (state) => {
      state.data = [];
      state.unread = 0;
    },
    readNotification: (state) => {
      state.unread = 0;
    },
    clearUnreadNotification: (state) => {
      state.data.map((notification) => (notification.read = true));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, { payload }) => {
      if (payload) {
        state.data = payload.notifications;
        state.unread = payload.unread;
        if (payload.next) {
          state.next = payload.next;
        }
      }
    });
  },
});

export const {
  addNotification,
  clearNotification,
  readNotification,
  clearUnreadNotification,
} = notificationSlice.actions;

export const notificationsReducer = notificationSlice.reducer;

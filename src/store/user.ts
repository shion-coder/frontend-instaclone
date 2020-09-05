import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserProps } from 'types';

/* -------------------------------------------------------------------------- */

/**
 * Initial State type and values
 */

type StateProps = {
  data: Partial<UserProps>;
  token: string | null;
};

const initialState: StateProps = {
  data: {},
  token: null,
};

/**
 * User slice
 */

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.data = payload.user;
      state.token = payload.token;
    },
    updateUser: (state, action: PayloadAction<Partial<UserProps>>) => {
      state.data = { ...state.data, ...action.payload };
    },
    removeUser: (state) => {
      state.data = {};
      state.token = null;
    },
  },
});

export const { addUser, updateUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

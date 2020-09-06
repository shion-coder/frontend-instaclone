import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserProps, ReturnAuthProps } from 'types';

/* -------------------------------------------------------------------------- */

/**
 * Initial State type and values
 */

type StateProps = {
  data: Partial<UserProps> & {
    token?: string;
  };
};

const initialState: StateProps = {
  data: {},
};

/**
 * User slice
 */

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<ReturnAuthProps>) => {
      state.data = action.payload.user;
    },
    updateUser: (state, action: PayloadAction<Partial<UserProps>>) => {
      state.data = { ...state.data, ...action.payload };
    },
    removeUser: (state) => {
      state.data = {};
    },
  },
});

export const { addUser, updateUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

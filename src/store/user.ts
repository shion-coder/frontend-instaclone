import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import {
  RegisterDataProps,
  LoginDataProps,
  UserProps,
  AuthResultProps,
  Errors,
  UpdateProfileProps,
  ProfileProps,
} from 'types';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

/**
 * Handle async with thunk
 */

export const register = createAsyncThunk('user/register', async (user: RegisterDataProps, { rejectWithValue }) => {
  try {
    const endpoint = '/auth/register';
    const { data } = await http.post<AuthResultProps>(endpoint, user);

    return data;
  } catch (error) {
    const exception: AxiosError<Errors> = error;

    if (!exception.response) {
      throw exception;
    }

    return rejectWithValue(exception.response.data.errors);
  }
});

export const login = createAsyncThunk('user/login', async (user: LoginDataProps, { rejectWithValue }) => {
  try {
    const endpoint = '/auth/login';
    const { data } = await http.post<AuthResultProps>(endpoint, user);

    return data;
  } catch (error) {
    const exception: AxiosError<Errors> = error;

    if (!exception.response) {
      throw exception;
    }

    return rejectWithValue(exception.response.data.errors);
  }
});

export const updateProfile = createAsyncThunk(
  'user/profile',
  async (profile: UpdateProfileProps, { rejectWithValue }) => {
    try {
      const endpoint = '/users/profile';
      const { data } = await http.put<ProfileProps>(endpoint, profile);

      return data;
    } catch (error) {
      const exception: AxiosError<Errors> = error;

      if (!exception.response) {
        throw exception;
      }

      return rejectWithValue(exception.response.data.errors);
    }
  },
);

/**
 * Initial State type and values
 */

type StateProps = {
  info: Partial<UserProps>;
  token: string | null;
};

const initialState: StateProps = {
  info: {},
  token: null,
};

/**
 * Auth slice
 */

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    oauthLogin: (state, { payload }) => {
      if (payload) {
        state.info = payload.user;
        state.token = payload.token;
      }
    },
    logout: (state) => {
      state.info = {};
      state.token = null;
    },
    changeAvatar: (state, { payload }) => {
      state.info.avatar = payload.avatar;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, { payload }) => {
      if (payload) {
        state.info = payload.user;
        state.token = payload.token;
      }
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload) {
        state.info = payload.user;
        state.token = payload.token;
      }
    });
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      if (payload) {
        state.info = payload.user;
      }
    });
  },
});

export const { oauthLogin, logout, changeAvatar } = userSlice.actions;

export const userReducer = userSlice.reducer;

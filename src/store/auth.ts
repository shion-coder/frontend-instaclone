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

export const register = createAsyncThunk('auth/register', async (user: RegisterDataProps, { rejectWithValue }) => {
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

export const login = createAsyncThunk('auth/login', async (user: LoginDataProps, { rejectWithValue }) => {
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

export const profile = createAsyncThunk('auth/profile', async (profile: UpdateProfileProps, { rejectWithValue }) => {
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
});

/**
 * Initial State type and values
 */

type StateProps = {
  user: Partial<UserProps>;
  token: string | null;
};

const initialState: StateProps = {
  user: {},
  token: null,
};

/**
 * Auth slice
 */

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    oauthLogin: (state, { payload }) => {
      if (payload) {
        state.user = payload.user;
        state.token = payload.token;
      }
    },
    logout: (state) => {
      state.user = {};
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, { payload }) => {
      if (payload) {
        state.user = payload.user;
        state.token = payload.token;
      }
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload) {
        state.user = payload.user;
        state.token = payload.token;
      }
    });
    builder.addCase(profile.fulfilled, (state, { payload }) => {
      if (payload) {
        state.user = payload.user;
      }
    });
  },
});

export const { oauthLogin, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;

import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ENVIRONMENT } from 'types';

import { userReducer } from './user';

/* -------------------------------------------------------------------------- */

/**
 * Root reducer
 */

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootStateProps = ReturnType<typeof rootReducer>;

/**
 * Persist store
 */

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Redux store
 */

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== ENVIRONMENT.PRODUCTION,
});

export type Dispatch = typeof store.dispatch;

export const persistor = persistStore(store);

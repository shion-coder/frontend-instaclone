import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Environment } from 'types';
import { authReducer } from './auth';
import { notificationReducer } from './notification';

/* -------------------------------------------------------------------------- */

const rootReducer = combineReducers({
  auth: authReducer,
  notification: notificationReducer,
});

export type RootStateProps = ReturnType<typeof rootReducer>;

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== Environment.PRODUCTION,
});

export type Dispatch = typeof store.dispatch;

export const persistor = persistStore(store);

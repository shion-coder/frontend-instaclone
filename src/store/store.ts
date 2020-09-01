import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Environment } from 'types';
import { userReducer } from './user';
import { notificationsReducer } from './notifications';

/* -------------------------------------------------------------------------- */

const rootReducer = combineReducers({
  user: userReducer,
  notifications: notificationsReducer,
});

export type RootStateProps = ReturnType<typeof rootReducer>;

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['user'],
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

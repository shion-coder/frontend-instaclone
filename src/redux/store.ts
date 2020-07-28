import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* -------------------------------------------------------------------------- */

const rootReducer = combineReducers({
  temp: () => ({}),
});

export type IRootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  storage,
  key: 'root',
  whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);

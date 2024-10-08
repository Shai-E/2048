import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import constantsSlice from './reducers/constantsReducer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['isDarkMode'],
};

const saga = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, constantsSlice);

export const store = configureStore({
  reducer: {
    constants: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(saga),
});

// run sagas here
// for example:
// saga.run(constantsSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

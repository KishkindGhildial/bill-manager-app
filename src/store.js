import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storageSession from 'redux-persist/lib/storage/session';
import { configureStore } from '@reduxjs/toolkit';

import billData from './billData';

import { billDataReducer } from './reducers/billDataReducer';

const initialState = { billData: billData };

const persistConfig = {
  key: 'root',
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
  blackList: [],
};

const reducer = combineReducers({
  billData: billDataReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  preloadedState: initialState,
});

export const persistedStore = persistStore(store);

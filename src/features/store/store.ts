import { configureStore } from "@reduxjs/toolkit";
import matchsicReducer from './storeSlice';

export const store = configureStore({
  reducer: {
    matchsic: matchsicReducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;




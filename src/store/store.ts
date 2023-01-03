import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter/filterSlice';
import cardSlice from './card/cardSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    card: cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CardState {
  items: [];
  totalPrice: number;
}

const initialState: CardState = {
  items: [],
  totalPrice: 0,
};

export const counterSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {

  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;

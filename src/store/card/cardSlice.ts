import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CardState {
  items: string[];
  totalPrice: number;
}

const initialState: CardState = {
  items: [],
  totalPrice: 0,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items.filter((item) => item.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItem, clearItems } = cardSlice.actions;

export default cardSlice.reducer;

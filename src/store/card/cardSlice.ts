import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PizzaItemType } from '../../types/pizza';

export interface CardState {
  items: PizzaItemType[];
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
    addItems: (state, action: PayloadAction<PizzaItemType>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<PizzaItemType>) => {
      state.items.filter((item) => item.id !== action.payload.id);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItem, clearItems } = cardSlice.actions;

export default cardSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PizzaItemType, PizzaInCard } from '../../types/pizza';

export interface CardState {
  items: PizzaInCard[];
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
    addItems: (state, action: PayloadAction<PizzaInCard>) => {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0);
    },
    removeItem: (state, action: PayloadAction<PizzaInCard>) => {
      state.items.filter((item) => item.id !== action.payload.id);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItem, clearItems } = cardSlice.actions;

export default cardSlice.reducer;

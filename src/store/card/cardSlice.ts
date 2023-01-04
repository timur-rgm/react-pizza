import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PizzaInCard } from '../../types/pizza';

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
      const foundItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size
      );

      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push(action.payload);
      }

      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );
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

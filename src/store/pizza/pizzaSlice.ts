import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PizzaListType } from '../../types/pizza';

export interface PizzaState {
  items: PizzaListType;
}

const initialState: PizzaState = {
  items: [],
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PizzaListType>) => {
      state.items = action.payload;
    },
    
  },
});

export const { setItems, } =
  pizzaSlice.actions;

export default pizzaSlice.reducer;

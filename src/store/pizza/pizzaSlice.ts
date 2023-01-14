import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PizzaListType } from '../../types/pizza';
import { LoadingStatuses } from '../../types/pizza';
import { fetchPizza } from './asyncActions';

export interface PizzaState {
  items: PizzaListType;
  loadingStatus: LoadingStatuses;
}

const initialState: PizzaState = {
  items: [],
  loadingStatus: LoadingStatuses.Loading,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PizzaListType>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.items = [];
      state.loadingStatus = LoadingStatuses.Loading;
    });
    builder.addCase(
      fetchPizza.fulfilled,
      (state, action: PayloadAction<PizzaListType>) => {
        state.items = action.payload;
        state.loadingStatus = LoadingStatuses.Success;
      }
    );
    builder.addCase(fetchPizza.rejected, (state) => {
      state.items = [];
      state.loadingStatus = LoadingStatuses.Error;
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;

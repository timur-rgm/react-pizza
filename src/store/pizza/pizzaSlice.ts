import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PizzaListType } from '../../types/pizza';
import { LoadingStatuses } from '../../types/pizza';
import { FilterState } from '../filter/filterSlice';

export const fetchPizza = createAsyncThunk<PizzaListType, FilterState>(
  'pizza/fetchPizza',
  async (arg) => {
    const { pageCount, categoryId, sortType, searchValue, orderType } = arg;

    const { data } = await axios.get<PizzaListType>(
      `https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza?page=${pageCount}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.type}&order=${orderType}${
        searchValue ? `&search=${searchValue}` : ''
      }`
    );

    return data;
  }
);

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

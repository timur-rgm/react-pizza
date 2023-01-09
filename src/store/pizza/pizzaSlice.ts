import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  PizzaItemType,
  PizzaListType,
  SearchPizzaParams,
} from '../../types/pizza';
import { LoadingStatuses } from '../../types/pizza';

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

export const fetchPizza = createAsyncThunk<PizzaListType, SearchPizzaParams>(
  'pizza/fetchPizza',
  async (arg) => {
    const {
      currentPage,
      currentCategoryId,
      currentSortType,
      currentSearchInputValue,
      currentOrderType,
    } = arg;

    const { data } = await axios.get(
      `https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza?page=${currentPage}&limit=4&${
        currentCategoryId > 0 ? `category=${currentCategoryId}` : ''
      }&sortBy=${currentSortType.type}&order=${currentOrderType}${
        currentSearchInputValue ? `&search=${currentSearchInputValue}` : ''
      }`
    );

    return data;
  }
);

// export const fetchPizzaById = createAsyncThunk<PizzaItemType, number>(
//   'pizza/fetchPizzaById',
//   async (id: number) => {

//     const { data } = await axios.get(
//       `https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza/${id}`
//     );

//     return data;
//   }
// );

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { sorting } from '../../const';
import { SortType } from '../../types/sort';

export interface FilterState {
  categoryId: number;
  sortType: SortType;
  orderType: string;
  searchValue: string;
}

const initialState: FilterState = {
  categoryId: 0,
  sortType: sorting[0],
  orderType: 'desc',
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    setOrderType: (state, action: PayloadAction<string>) => {
      state.orderType = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSortType, setOrderType, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;

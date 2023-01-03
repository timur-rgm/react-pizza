import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { sorting } from '../../const';
import { SortType } from '../../types/sort';

export interface FilterState {
  categoryId: number;
  sortType: SortType;
  orderType: string;
  searchValue: string;
  pageCount: number;
}
export interface MyType {
  categoryId: number;
  pageCount: number;
  orderType: string;
  sortType: SortType;
}

const initialState: FilterState = {
  categoryId: 0,
  sortType: sorting[0],
  orderType: 'desc',
  searchValue: '',
  pageCount: 1,
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
    setPage: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
    setFilters: (state, action: PayloadAction<MyType>) => {
      state.categoryId = action.payload.categoryId;
      state.pageCount = action.payload.pageCount;
      state.orderType = action.payload.orderType;
      state.sortType = action.payload.sortType;
    },
  },
});

export const {
  setCategoryId,
  setSortType,
  setOrderType,
  setSearchValue,
  setPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

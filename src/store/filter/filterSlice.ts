import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { sorting } from '../../const';
import { SortType } from '../../types/sort';

export interface FilterState {
  categoryId: number;
  sortType: SortType;
}

const initialState: FilterState = {
  categoryId: 0,
  sortType: sorting[0],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;

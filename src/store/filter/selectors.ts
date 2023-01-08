import { RootState } from '../store';
import { SortType } from '../../types/sort';

export const getCurrentCategoryId = (state: RootState): number =>
  state.filter.categoryId;
  
export const getCurrentSortType = (state: RootState): SortType =>
  state.filter.sortType;
  
export const getCurrentOrderType = (state: RootState): string =>
  state.filter.orderType;
  
export const getSearchInputValue = (state: RootState): string =>
  state.filter.searchValue;
  
export const getCurrentPage = (state: RootState): number =>
  state.filter.pageCount;
  
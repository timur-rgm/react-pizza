import { RootState } from '../store';
import { PizzaListType, LoadingStatuses } from '../../types/pizza';

export const getItems = (state: RootState): PizzaListType =>
  state.pizza.items;

export const getLoadingStatus = (state: RootState): LoadingStatuses =>
state.pizza.loadingStatus;


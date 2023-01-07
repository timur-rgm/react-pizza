import { RootState } from '../store';
import { PizzaListType } from '../../types/pizza';

export const getItems = (state: RootState): PizzaListType =>
  state.pizza.items;


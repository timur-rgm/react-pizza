import { RootState } from '../store';
import { PizzaInCard } from '../../types/pizza';

// Перейти на reselect там, где это необходимо

export const getTotalPrice = (state: RootState): number =>
  state.card.totalPrice;

export const getItems = (state: RootState): PizzaInCard[] | undefined =>
  state.card.items;

export const getAddedItemsCount = (state: RootState): number =>
  state.card.items.reduce((sum, item) => sum + item.count, 0);

export const getAddedItemsCountById =
  (id: number) =>
  (state: RootState): number =>
    state.card.items
      .filter((item) => item.id === id)
      .reduce((sum, current) => sum + current.count, 0);

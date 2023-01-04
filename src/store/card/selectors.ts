import { RootState } from '../store';
import { PizzaInCard } from '../../types/pizza';

export const getTotalPrice = (state: RootState): number =>
  state.card.totalPrice;

export const getAddedItemsCount = (state: RootState): number =>
  state.card.items.reduce((sum, item) => sum + item.count, 0);

export const getAddedItemById =
  (id: number) =>
  (state: RootState): PizzaInCard | undefined =>
    state.card.items.find((item) => item.id === id);



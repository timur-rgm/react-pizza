import { SortType } from './sort';

export type PizzaItemType = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type PizzaListType = PizzaItemType[];

export type PizzaInCard = {
  id: number;
  image: string;
  title: string;
  type: number;
  size: number;
  price: number;
  count: number;
};

export type SearchPizzaParams = {
  currentPage: number;
  currentCategoryId: number;
  currentSortType: SortType;
  currentSearchInputValue: string;
  currentOrderType: string;
};

export enum LoadingStatuses {
  Loading = 'loading',
  Success = 'completed',
  Error = 'error',
}

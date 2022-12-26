import { SortTypes } from './types/sort';

export const categories: string[] = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

export const sorting: SortTypes = [
  {
    type: 'rating',
    name: 'популярности',
  },
  {
    type: 'price',
    name: 'цене',
  },
  {
    type: 'title',
    name: 'алфавиту',
  },
];

export const pizzaTypes: string[] = ['тонкое', 'традиционное'];

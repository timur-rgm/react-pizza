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
}

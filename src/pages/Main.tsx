import { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import Pizza from '../components/pizza/Pizza';
import Skeleton from '../components/skeleton/Skeleton';
import { sorting } from '../const';
import { PizzaListType } from '../types/pizza';
import { SortType } from '../types/sort';

function Main() {
  const [pizza, setPizza] = useState<PizzaListType>([]);
  const [isPizzaLoading, setIsPizzaLoading] = useState<boolean>(true);

  const [orderType, setOrderType] = useState<string>('desc');
  const [currentCategoryId, setCurrentCategoryId] = useState<number>(0);
  const [selectedSortType, setSelectedSortType] = useState<SortType>(
    sorting[0]
  );

  const handleOrderClick = (order: string) => {
    setOrderType(order);
  };

  const handleCategoryClick = (index: number) => {
    setCurrentCategoryId(index);
  };

  const handleSortTypeSelect = (type: SortType) => {
    setSelectedSortType(type);
  };

  useEffect(() => {
    setIsPizzaLoading(true);
    fetch(
      `https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza?${
        currentCategoryId > 0 ? `category=${currentCategoryId}` : ''
      }&sortBy=${selectedSortType.type}&order=${orderType}`
    )
      .then((response) => response.json())
      .then((pizza) => {
        setPizza(pizza);
        setIsPizzaLoading(false);
      });
  }, [currentCategoryId, selectedSortType, orderType]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              id={currentCategoryId}
              onCategoryClick={handleCategoryClick}
            />
            <Sort
              sortType={selectedSortType}
              onTypeChange={handleSortTypeSelect}
              onOrderChange={handleOrderClick}
            />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isPizzaLoading
              ? [...new Array(8)].map((_item, index) => (
                  <Skeleton key={index} />
                ))
              : pizza.map((item) => (
                  <Pizza
                    title={item.title}
                    price={item.price}
                    image={item.imageUrl}
                    sizes={item.sizes}
                    types={item.types}
                    key={item.id}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

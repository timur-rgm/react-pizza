import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import axios, { AxiosResponse } from 'axios';
import { SearchContext } from '../components/app/App';
import Header from '../components/header/Header';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import Pizza from '../components/pizza/Pizza';
import Pagination from '../components/pagination/Pagination';
import Skeleton from '../components/skeleton/Skeleton';
import { PizzaListType } from '../types/pizza';

function Main() {
  const currentCategoryId = useSelector(
    (state: RootState) => state.filter.categoryId
  );
  const currentSortType = useSelector(
    (state: RootState) => state.filter.sortType
  );
  const currentOrderType = useSelector(
    (state: RootState) => state.filter.orderType
  );
  const currentSearchInputValue = useSelector(
    (state: RootState) => state.filter.searchValue
  );

  // const { searchInputValue } = useContext(SearchContext);

  const [pizza, setPizza] = useState<PizzaListType>([]);
  const [isPizzaLoading, setIsPizzaLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page + 1);
  };

  useEffect(() => {
    setIsPizzaLoading(true);
    axios
      .get(
        `https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza?page=${currentPage}&limit=4&${
          currentCategoryId > 0 ? `category=${currentCategoryId}` : ''
        }&sortBy=${currentSortType.type}&order=${currentOrderType}${
          currentSearchInputValue ? `&search=${currentSearchInputValue}` : ''
        }`
      )
      .then((response: AxiosResponse) => {
        setPizza(response.data);
        setIsPizzaLoading(false);
      });
  }, [
    currentCategoryId,
    currentSortType,
    currentOrderType,
    currentSearchInputValue,
    currentPage,
  ]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
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
          <Pagination onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}

export default Main;

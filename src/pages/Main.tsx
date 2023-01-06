import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { setFilters } from '../store/filter/filterSlice';
import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import Header from '../components/header/Header';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import Pizza from '../components/pizza/Pizza';
import Pagination from '../components/pagination/Pagination';
import Skeleton from '../components/skeleton/Skeleton';
import { sorting } from '../const';
import { PizzaListType } from '../types/pizza';

function Main() {
  const navigate = useNavigate();

  const [pizza, setPizza] = useState<PizzaListType>([]);
  const [isPizzaLoading, setIsPizzaLoading] = useState<boolean>(true);

  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

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
  const currentPage = useSelector((state: RootState) => state.filter.pageCount);

  const dispatch = useDispatch();

  const getPizza = async () => {
    setIsPizzaLoading(true);

    try {
      const pizza = await axios.get(
        `https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza?page=${currentPage}&limit=4&${
          currentCategoryId > 0 ? `category=${currentCategoryId}` : ''
        }&sortBy=${currentSortType.type}&order=${currentOrderType}${
          currentSearchInputValue ? `&search=${currentSearchInputValue}` : ''
        }`
      );

      setPizza(pizza.data);
      setIsPizzaLoading(false);
    } catch (error) {
      setIsPizzaLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId: currentCategoryId,
        pageCount: currentPage,
        orderType: currentOrderType,
        sortType: currentSortType.type,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [
    currentCategoryId,
    currentSortType,
    currentOrderType,
    currentSearchInputValue,
    currentPage,
  ]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sorting.filter((item) => item.type === params.sortType);

      dispatch(
        setFilters({
          categoryId: Number(params.categoryId),
          pageCount: Number(params.pageCount),
          orderType: String(params.orderType),
          sortType: {
            name: sort[0].name,
            type: sort[0].type,
          },
        })
      );

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      getPizza();
    }

    isSearch.current = false;
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
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.imageUrl}
                    sizes={item.sizes}
                    types={item.types}
                    key={item.id}
                  />
                ))}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Main;

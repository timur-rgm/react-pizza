import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import { setFilters } from '../store/filter/filterSlice';
import { fetchPizza } from '../store/pizza/asyncActions';
import { getItems, getLoadingStatus } from '../store/pizza/selectors';
import {
  getCurrentCategoryId,
  getCurrentOrderType,
  getCurrentPage,
  getSearchInputValue,
  getCurrentSortType,
} from '../store/filter/selectors';
import qs from 'qs';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import Pizza from '../components/pizza-item/PizzaItem';
import Pagination from '../components/pagination/Pagination';
import Skeleton from '../components/skeleton/Skeleton';
import { sorting } from '../const';
import { LoadingStatuses } from '../types/pizza';

function Main() {
  const navigate = useNavigate();

  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const pizza = useSelector(getItems);
  const loadingStatus = useSelector(getLoadingStatus);
  const currentCategoryId = useSelector(getCurrentCategoryId);
  const currentSortType = useSelector(getCurrentSortType);
  const currentOrderType = useSelector(getCurrentOrderType);
  const currentPage = useSelector(getCurrentPage);
  const searchInputValue = useSelector(getSearchInputValue);

  const dispatch = useAppDispatch();

  const getPizza = async () => {
    dispatch(
      fetchPizza({
        pageCount: currentPage,
        categoryId: currentCategoryId,
        sortType: currentSortType,
        searchValue: searchInputValue,
        orderType: currentOrderType,
      })
    );
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
    searchInputValue,
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
          searchValue: '',
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
    searchInputValue,
    currentPage,
  ]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {loadingStatus === LoadingStatuses.Error ? (
        <div className="content__error">
          <h2>Ошибка</h2>
          <p>К сожалению, не удалось получить пиццы...</p>
        </div>
      ) : (
        <div className="content__items">
          {loadingStatus === LoadingStatuses.Loading
            ? [...new Array(8)].map((_item, index) => <Skeleton key={index} />)
            : pizza?.map((item) => (
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
      )}
      <Pagination />
    </div>
  );
}

export default Main;

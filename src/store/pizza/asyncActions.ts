import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PizzaListType } from '../../types/pizza';
import { FilterState } from '../filter/filterSlice';

export const fetchPizza = createAsyncThunk<PizzaListType, FilterState>(
  'pizza/fetchPizza',
  async (arg) => {
    const { pageCount, categoryId, sortType, searchValue, orderType } = arg;

    const { data } = await axios.get<PizzaListType>(
      `https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza?page=${pageCount}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.type}&order=${orderType}${
        searchValue ? `&search=${searchValue}` : ''
      }`
    );

    return data;
  }
);

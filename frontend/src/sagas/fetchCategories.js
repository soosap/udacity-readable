/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import type { Action, Categories } from '../utils/types';

const getCategories = () => {
  return axios.get('/api/categories', {
    headers: { Authorization: 'somethingsomething' },
  });
};

function* fetchCategories(action: Action): Generator<*, *, *> {
  const response = yield call(getCategories);

  const categories: Categories = response.data.categories.reduce((acc, category) => {
    acc[category.name] = category;
    return acc;
  }, {});

  const success: Action = { type: 'CATEGORIES_FETCH_SUCCESS', payload: categories };
  yield put(success);
}

export default fetchCategories;

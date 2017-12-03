/* @flow */
import { takeLatest } from 'redux-saga/effects';
import type { ActionType } from '../utils/types';

/*
|-----------------------------------------------------------
| Worker sagas
|-----------------------------------------------------------
*/
import fetchPosts from './fetchPosts';
import fetchCategories from './fetchCategories';

/*
|-----------------------------------------------------------
| Root saga
|-----------------------------------------------------------
*/
let type: ActionType;

function* rootSaga(): Generator<*, *, *> {
  type = 'POSTS_FETCH_REQUEST';
  yield takeLatest(type, fetchPosts);

  type = 'CATEGORIES_FETCH_REQUEST';
  yield takeLatest(type, fetchCategories);
}

export default rootSaga;

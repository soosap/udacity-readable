/* @flow */
import { takeLatest } from 'redux-saga/effects';
import type { ActionType } from '../utils/types';

/*
|-----------------------------------------------------------
| Worker sagas
|-----------------------------------------------------------
*/
import fetchPosts from './fetchPosts';

/*
|-----------------------------------------------------------
| Root saga
|-----------------------------------------------------------
*/
let type: ActionType;

function* rootSaga(): Generator<*, *, *> {
  type = 'POSTS_FETCH_REQUEST';
  yield takeLatest(type, fetchPosts);
}

export default rootSaga;

/* @flow */
import { takeLatest, takeEvery } from 'redux-saga/effects';
import type { ActionType } from '../utils/types';

/*
|-----------------------------------------------------------
| Worker sagas
|-----------------------------------------------------------
*/
import fetchPosts from './fetchPosts';
import fetchCategories from './fetchCategories';
import castVote from './castVote';
import deletePost from './deletePost';

/*
|-----------------------------------------------------------
| Root saga
|-----------------------------------------------------------
*/
let type: ActionType;

function* rootSaga(): Generator<*, *, *> {
  type = 'POSTS_FETCH_REQUEST';
  yield takeLatest(type, fetchPosts);

  type = 'POST_CAST_VOTE_REQUEST';
  yield takeEvery(type, castVote);

  type = 'POST_DELETE_REQUEST';
  yield takeLatest(type, deletePost);

  type = 'CATEGORIES_FETCH_REQUEST';
  yield takeLatest(type, fetchCategories);
}

export default rootSaga;

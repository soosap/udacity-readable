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
import castVotePost from './castVotePost';
import castVoteComment from './castVoteComment';
import deletePost from './deletePost';
import createPost from './createPost';
import editPost from './editPost';
import deleteComment from './deleteComment';
import fetchPostDetails from './fetchPostDetails';

/*
|-----------------------------------------------------------
| Root saga
|-----------------------------------------------------------
*/
let type: ActionType;

function* rootSaga(): Generator<*, *, *> {
  type = 'POST_FETCH_REQUEST';
  yield takeLatest(type, fetchPostDetails);

  type = 'POSTS_FETCH_REQUEST';
  yield takeLatest(type, fetchPosts);

  type = 'POST_CAST_VOTE_REQUEST';
  yield takeEvery(type, castVotePost);

  type = 'POST_DELETE_REQUEST';
  yield takeLatest(type, deletePost);

  type = 'POST_CREATE_REQUEST';
  yield takeLatest(type, createPost);

  type = 'POST_EDIT_REQUEST';
  yield takeLatest(type, editPost);

  type = 'COMMENT_CAST_VOTE_REQUEST';
  yield takeEvery(type, castVoteComment);

  type = 'COMMENT_DELETE_REQUEST';
  yield takeLatest(type, deleteComment);

  type = 'CATEGORIES_FETCH_REQUEST';
  yield takeLatest(type, fetchCategories);
}

export default rootSaga;

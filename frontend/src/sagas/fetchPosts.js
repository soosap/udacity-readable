/* @flow */
import axios from 'axios';
import { call } from 'redux-saga/effects';

import type { Action } from '../utils/types';

const getPosts = () => {
  return axios.get('/api/posts', { headers: { Authorization: 'somethingsomething' } })
};

function* fetchPosts(action: Action) {
  const response = yield call(getPosts);

  console.log('response', response);
  // const success: Action = { type: 'POSTS_FETCH_SUCCESS', payload: { posts } };
  // yield put(success);
}

export default fetchPosts;

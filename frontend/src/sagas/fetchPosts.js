/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import type { Action, Posts } from '../utils/types';

const getPosts = () => {
  return axios.get('/api/posts', { headers: { Authorization: 'somethingsomething' } })
};

function* fetchPosts(action: Action): Generator<*, *, *> {
  const response = yield call(getPosts);

  const posts: Posts = response.data.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
  }, {});

  const success: Action = { type: 'POSTS_FETCH_SUCCESS', payload: posts };
  yield put(success);
}

export default fetchPosts;

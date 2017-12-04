/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import type {
  PostsFetchRequestAction,
  PostsFetchSuccessAction,
  Posts,
} from '../utils/types';

const getPosts = (category?: string) => {
  return axios.get(category ? `/api/${category}/posts` : '/api/posts', {
    headers: { Authorization: 'somethingsomething' },
  });
};

function* fetchPosts(action: PostsFetchRequestAction): Generator<*, *, *> {
  const response = yield call(getPosts, action.payload);

  const posts: Posts = response.data.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
  }, {});

  const success: PostsFetchSuccessAction = {
    type: 'POSTS_FETCH_SUCCESS',
    payload: posts,
  };
  yield put(success);
}

export default fetchPosts;

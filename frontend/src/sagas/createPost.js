/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { v1 as uuid } from 'uuid';

import type {
  PostCreateRequestAction,
  PostCreateSuccessAction,
} from '../utils/types';

const submitCreatePost = data => {
  return axios.post(`/api/posts`, data, {
    headers: { Authorization: 'somethingsomething' },
  });
};

function* createPost(action: PostCreateRequestAction): Generator<*, *, *> {
  const post = yield call(submitCreatePost, {
    ...action.payload,
    timestamp: Date.now(),
    id: uuid(),
  });

  const success: PostCreateSuccessAction = {
    type: 'POST_CREATE_SUCCESS',
    payload: post,
  };
  yield put(success);
}

export default createPost;

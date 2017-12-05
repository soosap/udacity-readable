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
  const postId = uuid();
  const response = yield call(submitCreatePost, {
    ...action.payload.post,
    timestamp: Date.now(),
    id: postId,
  });

  const success: PostCreateSuccessAction = {
    type: 'POST_CREATE_SUCCESS',
    payload: response.data,
  };
  yield put(success);
  const { category } = action.payload.post;
  action.payload.history.push(`/${category}/${postId}`);
}

export default createPost;

/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import type {
  PostEditRequestAction,
  PostEditSuccessAction,
} from '../utils/types';

const submitEditPost = data => {
  return axios.put(`/api/posts/${data.id}`, data, {
    headers: { Authorization: 'somethingsomething' },
  });
};

function* editPost(action: PostEditRequestAction): Generator<*, *, *> {
  const response = yield call(submitEditPost, action.payload.post);

  const success: PostEditSuccessAction = {
    type: 'POST_EDIT_SUCCESS',
    payload: response.data,
  };
  yield put(success);
  const { category, id } = action.payload.post;
  action.payload.history.push(`/${category}/${id}`);
}

export default editPost;

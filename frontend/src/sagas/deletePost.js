/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import type {
  PostDeleteRequestAction,
  PostDeleteSuccessAction,
} from '../utils/types';

const submitDeletePost = (id) => {
  return axios.delete(
    `/api/posts/${id}`,
    {
      headers: { Authorization: 'somethingsomething' },
    },
  );
};

function* deletePost(action: PostDeleteRequestAction): Generator<*, *, *> {
  yield call(submitDeletePost, action.payload);

  const success: PostDeleteSuccessAction = {
    type: 'POST_DELETE_SUCCESS',
    payload: action.payload,
  };
  yield put(success);
}

export default deletePost;

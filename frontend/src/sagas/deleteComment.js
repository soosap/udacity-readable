/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import type {
  CommentDeleteRequestAction,
  CommentDeleteSuccessAction,
} from '../utils/types';

const submitDeleteComment = id => {
  return axios.delete(`/api/comments/${id}`, {
    headers: { Authorization: 'somethingsomething' },
  });
};

function* deletePost(action: CommentDeleteRequestAction): Generator<*, *, *> {
  yield call(submitDeleteComment, action.payload);

  const success: CommentDeleteSuccessAction = {
    type: 'COMMENT_DELETE_SUCCESS',
    payload: action.payload,
  };
  yield put(success);
}

export default deletePost;

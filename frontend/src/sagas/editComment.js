/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import type {
  CommentEditRequestAction,
  CommentEditSuccessAction,
} from '../utils/types';

const submitEditComment = data => {
  return axios.put(`/api/comments/${data.id}`, data, {
    headers: { Authorization: 'somethingsomething' },
  });
};

function* editComment(action: CommentEditRequestAction): Generator<*, *, *> {
  const response = yield call(submitEditComment, action.payload);

  const success: CommentEditSuccessAction = {
    type: 'COMMENT_EDIT_SUCCESS',
    payload: response.data,
  };
  yield put(success);
}

export default editComment;

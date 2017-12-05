/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { v1 as uuid } from 'uuid';

import type {
  CommentCreateRequestAction,
  CommentCreateSuccessAction,
} from '../utils/types';

const submitCreateComment = data => {
  return axios.post(`/api/comments`, data, {
    headers: { Authorization: 'somethingsomething' },
  });
};

function* createComment(
  action: CommentCreateRequestAction,
): Generator<*, *, *> {
  const commentId = uuid();
  const response = yield call(submitCreateComment, {
    ...action.payload.comment,
    timestamp: Date.now(),
    id: commentId,
    parentId: action.payload.parentId,
  });

  const success: CommentCreateSuccessAction = {
    type: 'COMMENT_CREATE_SUCCESS',
    payload: response.data,
  };
  yield put(success);
}

export default createComment;

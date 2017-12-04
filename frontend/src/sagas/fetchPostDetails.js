/* @flow */
import axios from 'axios';
import { call, put, all } from 'redux-saga/effects';

import type {
  PostFetchRequestAction,
  PostFetchSuccessAction,
  Post,
  Comments,
} from '../utils/types';

const getPostById = (id: string) => {
  return axios.get(`/api/posts/${id}`, {
    headers: { Authorization: 'somethingsomething' },
  });
};

const getCommentsForPost = (id: string) => {
  return axios.get(`/api/posts/${id}/comments`, {
    headers: { Authorization: 'somethingsomething' },
  });
};

function* fetchPostDetails(action: PostFetchRequestAction): Generator<*, *, *> {
  const [postResponse, commentsResponse] = yield all([
    call(getPostById, action.payload),
    call(getCommentsForPost, action.payload),
  ]);

  const post: Post = postResponse.data;

  const comments: Comments = commentsResponse.data.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
  }, {});

  const success: PostFetchSuccessAction = {
    type: 'POST_FETCH_SUCCESS',
    payload: { post, comments },
  };
  yield put(success);
}

export default fetchPostDetails;

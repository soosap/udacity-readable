/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import type {
  PostCastVoteRequestAction,
  PostCastVoteSuccessAction,
} from '../utils/types';

const submitVoteCast = ({ id, direction }) => {
  return axios.post(`/api/posts/${id}`, { option: direction }, {
    headers: { Authorization: 'somethingsomething' },
  });
};

function* castVote(action: PostCastVoteRequestAction): Generator<*, *, *> {
  yield call(submitVoteCast, action.payload);

  const success: PostCastVoteSuccessAction = {
    type: 'POST_CAST_VOTE_SUCCESS',
    payload: action.payload,
  };
  yield put(success);
}

export default castVote;

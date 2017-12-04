/* @flow */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import type {
  CommentCastVoteRequestAction,
  CommentCastVoteSuccessAction,
} from '../utils/types';

const submitVoteCast = ({ id, direction }) => {
  return axios.post(
    `/api/comments/${id}`,
    { option: direction },
    {
      headers: { Authorization: 'somethingsomething' },
    },
  );
};

function* castVote(action: CommentCastVoteRequestAction): Generator<*, *, *> {
  yield call(submitVoteCast, action.payload);

  const success: CommentCastVoteSuccessAction = {
    type: 'COMMENT_CAST_VOTE_SUCCESS',
    payload: action.payload,
  };
  yield put(success);
}

export default castVote;

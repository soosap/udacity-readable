/* @flow */
import * as R from 'ramda';

import type { Action, Comment } from '../utils/types';

type State = {
  [key: $PropertyType<Comment, 'id'>]: Comment,
};

export default function(state: State = {}, action: Action) {
  switch (action.type) {
    case 'POST_FETCH_SUCCESS':
      return action.payload.comments;
    case 'COMMENT_CAST_VOTE_SUCCESS':
      return {
        ...state,
        [action.payload.id]: R.evolve(
          { voteScore: action.payload.direction === 'upVote' ? R.inc : R.dec },
          state[action.payload.id],
        ),
      };
    case 'COMMENT_DELETE_SUCCESS':
      return {
        ...state,
        [action.payload]: { ...state[action.payload], deleted: true },
      };
    default:
      return state;
  }
}

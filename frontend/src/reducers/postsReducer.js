/* @flow */
import * as R from 'ramda';
import type { Action, Post } from '../utils/types';

type State = {
  [key: $PropertyType<Post, 'id'>]: Post,
};

export default function(state: State = {}, action: Action) {
  switch (action.type) {
    case 'POST_CREATE_SUCCESS':
      return { ...state, [action.payload.id]: action.payload };
    case 'POST_FETCH_SUCCESS':
      return { ...state, [action.payload.post.id]: action.payload.post };
    case 'POSTS_FETCH_SUCCESS':
      return { ...state, ...action.payload };
    case 'POST_CAST_VOTE_SUCCESS':
      return {
        ...state,
        [action.payload.id]: R.evolve(
          { voteScore: action.payload.direction === 'upVote' ? R.inc : R.dec },
          state[action.payload.id],
        ),
      };
    case 'POST_DELETE_SUCCESS':
      return {
        ...state,
        [action.payload]: { ...state[action.payload], deleted: true },
      };
    default:
      return state;
  }
}

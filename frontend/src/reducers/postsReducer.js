/* @flow */
import type { Action, Post } from '../utils/types';

type State = {
  [key: $PropertyType<Post, 'id'>]: Post,
};

export default function(state: State = {}, action: Action) {
  switch (action.type) {
    case 'POSTS_FETCH_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

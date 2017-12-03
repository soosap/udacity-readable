/* @flow */
import type { Action, Comment } from '../utils/types';

type State = {
  [key: $PropertyType<Comment, 'id'>]: Comment,
};

export default function(state: State = {}, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

/* @flow */
import type { Action, Category } from '../utils/types';

type State = {
  [key: $PropertyType<Category, 'name'>]: Category,
};

export default function(state: State = {}, action: Action) {
  switch (action.type) {
    case 'CATEGORIES_FETCH_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

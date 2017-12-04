/* @flow */
import * as R from 'ramda';
import type { State } from '../utils/types';

export const getPostsByCategory = (state: State, category: string) =>
  R.map(id => state.posts[id], R.keys(state.posts));

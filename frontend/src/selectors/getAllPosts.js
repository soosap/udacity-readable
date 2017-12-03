/* @flow */
import * as R from 'ramda';
import type { State } from '../utils/types';

export const getAllPosts = (state: State) =>
  R.map(id => state.posts[id], R.keys(state.posts));

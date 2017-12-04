/* @flow */
import * as R from 'ramda';
import type { State } from '../utils/types';

const posts = (state: State) =>
  R.map(id => state.posts[id], R.keys(state.posts));

export default posts;
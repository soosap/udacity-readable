/* @flow */
import * as R from 'ramda';
import type { State } from '../utils/types';

const comments = (state: State) =>
  R.map(id => state.comments[id], R.keys(state.comments));

export default comments;

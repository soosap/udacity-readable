/* @flow */
import * as R from 'ramda';
import type { State } from '../utils/types';

export const getCommentsForPost = (state: State, postId: string) =>
  R.filter(id => state.comments[id].parentId === postId, R.keys(state.comments));

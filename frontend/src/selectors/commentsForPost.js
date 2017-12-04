/* @flow */
import * as R from 'ramda';
import type { State } from '../utils/types';

const commentsForPost = (state: State, postId: string) =>
  R.filter(id => state.comments[id].parentId === postId, R.keys(state.comments));

  export default commentsForPost;
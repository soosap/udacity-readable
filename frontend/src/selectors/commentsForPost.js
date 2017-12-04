/* @flow */
import * as R from 'ramda';
import { createSelector } from 'reselect';

import commentsSelector from './comments';
const postIdSelector = (state, postId) => postId;

const commentsForPost = createSelector(
  commentsSelector,
  postIdSelector,
  (comments, postId) => {
    return R.filter(R.propEq('parentId', postId), comments)
  }
);

export default commentsForPost;
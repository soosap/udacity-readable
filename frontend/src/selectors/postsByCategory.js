/* @flow */
import * as R from 'ramda';
import { createSelector } from 'reselect';

import postsSelector from './posts';
const categorySelector = (state, category) => category;

const postsByCategory = createSelector(
  postsSelector,
  categorySelector,
  (posts, category) => {
    return category ? R.filter(R.propEq('category', category), posts) : posts;
  }
);

export default postsByCategory;

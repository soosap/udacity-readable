/* @flow */
import type { Action } from '../utils/types';

function* fetchPosts(action: Action) {
  console.log('TODO: fetch the data', action);
  yield;
}

export default fetchPosts;
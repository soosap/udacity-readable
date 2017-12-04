/* @flow */
import type { State } from '../utils/types';

export const getPostById = (state: State, postId: string) =>
  state.posts[postId];

/* @flow */
import type { State } from '../utils/types';

const postById = (state: State, postId: string) =>
  state.posts[postId];

export default postById;
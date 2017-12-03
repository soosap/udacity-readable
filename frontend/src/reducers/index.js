/* @flow */
import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import categoriesReducer from './categoriesReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
});

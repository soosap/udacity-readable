/* @flow */
import * as R from 'ramda';
import type { State } from '../utils/types';

export const getCategories = (state: State) =>
  R.map(name => state.categories[name], R.keys(state.categories));

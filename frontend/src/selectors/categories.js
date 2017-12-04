/* @flow */
import * as R from 'ramda';
import type { State } from '../utils/types';

const categories = (state: State) =>
  R.map(name => state.categories[name], R.keys(state.categories));

export default categories;
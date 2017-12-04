/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { categories } from '../selectors';
import { PostCreateForm } from '../components';
import type { Category, Dispatch } from '../utils/types';

type Props = {
  dispatch: Dispatch,
  categories: Array<Category>,
};
type State = {};

class PostEdit extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({ type: 'CATEGORIES_FETCH_REQUEST' });
  }

  state = {};

  submit = (values: Object) => {
    this.props.dispatch({ type: 'POST_EDIT_REQUEST', payload: values });
  };

  render() {
    return (
      <PostCreateForm
        type="edit"
        onSubmit={this.submit}
        categories={this.props.categories}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: categories(state),
  };
};

export default connect(mapStateToProps)(PostEdit);

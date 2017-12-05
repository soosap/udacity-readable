/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';

import { categories } from '../selectors';
import { PostCreateForm } from '../components';
import type { Category, Dispatch, Post } from '../utils/types';

type Props = {
  dispatch: Dispatch,
  categories: Array<Category>,
  history: Object,
};
type State = {};

class PostCreate extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({ type: 'CATEGORIES_FETCH_REQUEST' });
  }

  state = {};

  submit = (values: $Subtype<Post>) => {
    this.props.dispatch({
      type: 'POST_CREATE_REQUEST',
      payload: { post: values, history: this.props.history },
    });
  };

  render() {
    return (
      <PostCreateForm
        type="create"
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

export default connect(mapStateToProps)(PostCreate);

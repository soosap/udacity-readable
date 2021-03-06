/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';

import { categories, postById } from '../selectors';
import { PostCreateForm } from '../components';
import type { Category, Dispatch, Post } from '../utils/types';

type Props = {
  dispatch: Dispatch,
  categories: Array<Category>,
  post: Post,
  match: Object,
  history: Object,
};
type State = {};

class PostEdit extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({
      type: 'POST_FETCH_REQUEST',
      payload: {
        id: this.props.match.params.postId,
        history: this.props.history,
      },
    });
    this.props.dispatch({ type: 'CATEGORIES_FETCH_REQUEST' });
  }

  state = {};

  submit = (values: $Subtype<Post>) => {
    this.props.dispatch({
      type: 'POST_EDIT_REQUEST',
      payload: { post: values, history: this.props.history },
    });
  };

  render() {
    return (
      <PostCreateForm
        type="edit"
        onSubmit={this.submit}
        categories={this.props.categories}
        initialValues={this.props.post}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories: categories(state),
    post: postById(state, props.match.params.postId),
  };
};

export default connect(mapStateToProps)(PostEdit);

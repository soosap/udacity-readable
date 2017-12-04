/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getPostById, getCommentsForPost } from '../selectors';
import type { Dispatch, Post, Comment } from '../utils/types';

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
`;

type Props = {
  dispatch: Dispatch,
  match: Object,
  post: Post,
  comments: Array<Comment>,
};
type State = {};

class PostDetails extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({
      type: 'POST_FETCH_REQUEST',
      payload: this.props.match.params.postId,
    });
  }

  state = {};

  render() {
    return <Wrapper>PostDetails</Wrapper>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: getPostById(state, props.match.params.postId),
    comments: getCommentsForPost(state, props.match.params.postId),
  };
};

export default connect(mapStateToProps)(PostDetails);

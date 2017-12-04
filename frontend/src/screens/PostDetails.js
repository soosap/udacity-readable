/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { BlogEntry, Back } from '../components';
import { postById, commentsForPost } from '../selectors';
import type { Dispatch, Post, Comment } from '../utils/types';

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: .8rem;
`;

type Props = {
  dispatch: Dispatch,
  match: Object,
  post: Post,
  history: Object,
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

  upVote = (id: $PropertyType<Post, 'id'>) => {
    this.props.dispatch({
      type: 'POST_CAST_VOTE_REQUEST',
      payload: { direction: 'upVote', id },
    });
  };

  downVote = (id: $PropertyType<Post, 'id'>) => {
    this.props.dispatch({
      type: 'POST_CAST_VOTE_REQUEST',
      payload: { direction: 'downVote', id },
    });
  };

  deletePost = (id: $PropertyType<Post, 'id'>) => {
    this.props.dispatch({
      type: 'POST_DELETE_REQUEST',
      payload: id,
    });
  };

  editPost = (id: $PropertyType<Post, 'id'>) => {
    this.props.history.push(`/posts/${id}/edit`);
  };

  render() {
    const { post } = this.props;
    return (
      <Wrapper>
        <Header>
          <Back to="/">Back</Back>
        </Header>
        <BlogEntry
          {...post}
          upVote={this.upVote}
          downVote={this.downVote}
          deletePost={this.deletePost}
          editPost={this.editPost}
          showBody
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: postById(state, props.match.params.postId),
    comments: commentsForPost(state, props.match.params.postId),
  };
};

export default compose(withRouter, connect(mapStateToProps))(PostDetails);

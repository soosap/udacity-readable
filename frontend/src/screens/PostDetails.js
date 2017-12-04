/* @flow */
import * as React from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { BlogEntry, Back, BlogEntryComment, Button } from '../components';
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
  margin-bottom: 0.8rem;
`;

const Main = styled.main``;

const Body = styled.div`
  display: flex;

  > button {
    margin: 1.5rem;
  }
`;

const Comments = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Icon = styled.i`
  color: white;
`;

type Props = {
  dispatch: Dispatch,
  match: Object,
  post: Post,
  history: Object,
  comments: Array<Comment>,
};
type State = {
  showCommentBox: boolean,
};

class PostDetails extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({
      type: 'POST_FETCH_REQUEST',
      payload: this.props.match.params.postId,
    });
  }

  state = {
    showCommentBox: false,
  };

  upVotePost = (id: $PropertyType<Post, 'id'>) => {
    this.props.dispatch({
      type: 'POST_CAST_VOTE_REQUEST',
      payload: { direction: 'upVote', id },
    });
  };

  downVotePost = (id: $PropertyType<Post, 'id'>) => {
    this.props.dispatch({
      type: 'POST_CAST_VOTE_REQUEST',
      payload: { direction: 'downVote', id },
    });
  };

  upVoteComment = (id: $PropertyType<Comment, 'id'>) => {
    this.props.dispatch({
      type: 'COMMENT_CAST_VOTE_REQUEST',
      payload: { direction: 'upVote', id },
    });
  };

  downVoteComment = (id: $PropertyType<Comment, 'id'>) => {
    this.props.dispatch({
      type: 'COMMENT_CAST_VOTE_REQUEST',
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

  deleteComment = (id: $PropertyType<Comment, 'id'>) => {
    this.props.dispatch({ type: 'COMMENT_DELETE_REQUEST', payload: id });
  };

  editComment = (id: $PropertyType<Comment, 'id'>) => {};

  openCommentBox = () => {
    console.log('opening comment box');
    this.setState({ showCommentBox: true });
  };

  render() {
    const { post, comments } = this.props;
    return (
      <Wrapper>
        <Header>
          <Back to="/">Back</Back>
        </Header>
        <Main>
          <BlogEntry
            {...post}
            upVote={this.upVotePost}
            downVote={this.downVotePost}
            deletePost={this.deletePost}
            editPost={this.editPost}
            showBody
          />
        </Main>
        <Body>
          <Button circular onClick={this.openCommentBox}>
            <Icon className="fa fa-plus fa-2x" aria-hidden="true" />
          </Button>
          <Comments>
            {R.compose(
              R.map(comment => (
                <BlogEntryComment
                  key={comment.id}
                  {...comment}
                  deleteComment={this.deleteComment}
                  editComment={this.editComment}
                  upVote={this.upVoteComment}
                  downVote={this.downVoteComment}
                />
              )),
              R.filter(R.propEq('deleted', false)),
            )(comments)}
          </Comments>
        </Body>
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

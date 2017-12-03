/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getAllPosts } from '../selectors';
import { BlogEntry } from '../components';
import type { Dispatch, Post } from '../utils/types';

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
`;

type Props = {
  dispatch: Dispatch,
  posts: Array<Post>,
};

type State = {};

class Home extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({ type: 'POSTS_FETCH_REQUEST' });
    this.props.dispatch({ type: 'CATEGORIES_FETCH_REQUEST' });
  }

  state = {};

  upVote = () => {};

  downVote = () => {};

  render() {
    const { posts } = this.props;
    return (
      <Wrapper>
        {posts.map(post => (
          <BlogEntry
            key={post.id}
            {...post}
            upVote={this.upVote}
            downVote={this.downVote}
          />
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: getAllPosts(state),
  };
};

export default connect(mapStateToProps)(Home);

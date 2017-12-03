/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getAllPosts, getAllCategories } from '../selectors';
import { BlogEntry, Tag } from '../components';
import type { Dispatch, Post, Category } from '../utils/types';

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
`;

const Categories = styled.div`
  display: flex;
  margin-bottom: .6rem;
`;

type Props = {
  dispatch: Dispatch,
  posts: Array<Post>,
  categories: Array<Category>,
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
    const { posts, categories } = this.props;
    return (
      <Wrapper>
        <Categories>
          {categories.map(category => (
            <Tag key={category.name} to={`/categories/${category.path}`}>
              {category.name}
            </Tag>
          ))}
        </Categories>
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
    categories: getAllCategories(state),
  };
};

export default connect(mapStateToProps)(Home);

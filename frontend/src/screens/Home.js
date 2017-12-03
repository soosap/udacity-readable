/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getAllPosts, getAllCategories } from '../selectors';
import { BlogEntry, Tag, Button } from '../components';
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

const Entries = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5rem;
  padding-right: 1rem;
`;

const Icon = styled.i`
  color: white;
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
        <Entries>
          {posts.map(post => (
            <BlogEntry
              key={post.id}
              {...post}
              upVote={this.upVote}
              downVote={this.downVote}
            />
          ))}
        </Entries>
        <Buttons>
          <Button circular>
            <Icon className="fa fa-plus fa-2x" aria-hidden="true" />
          </Button>
        </Buttons>
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

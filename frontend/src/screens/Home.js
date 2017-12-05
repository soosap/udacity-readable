/* @flow */
import * as React from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { postsByCategory, categories } from '../selectors';
import { BlogEntry, Tag, Button, Switch, Back } from '../components';
import type { Dispatch, Post, Category } from '../utils/types';

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  display: flex;
`;

const Filters = styled.div`
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  i {
    padding-bottom: 0.15rem;
  }
`;

const Categories = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.3rem;
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
  history: Object,
  match: Object,
  upVote: (id: $PropertyType<Post, 'id'>) => void,
  downVote: (id: $PropertyType<Post, 'id'>) => void,
  deletePost: (id: $PropertyType<Post, 'id'>) => void,
  fetchPosts: (category?: $PropertyType<Category, 'name'>) => void,
  fetchCategories: () => void,
};

type State = {
  sortedBy: 'score' | 'date',
};

class Home extends React.Component<Props, State> {
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.category);
    this.props.fetchCategories();
  }

  state = {
    sortedBy: 'score',
    // TODO: Move sorting and filtering out of render method.
    // render may be called many times and the sorting and filtering
    // could be compute intensive for large lists. It would be best
    // to handle these kind of operations outside of render, i.e. in
    // connect or more precisely in our selectors.
    // Therefore this sortedBy local component state should be moved
    // to global redux state.

    // The code in our render also becomes more readable, i.e.
    // {this.props.posts.map(post => <BlogEntry
    //   key={post.id}
    //   {...post}
    //   upVote={this.props.upVote}
    //   downVote={this.props.downVote}
    //   deletePost={this.props.deletePost}
    //   editPost={this.editPost}
    // />}
  };

  editPost = (id: $PropertyType<Post, 'id'>) => {
    this.props.history.push(`/posts/${id}/edit`);
  };

  render() {
    const { posts, categories, history } = this.props;

    return (
      <Wrapper>
        <Header>
          {this.props.match.params.category && <Back to="/" />}
          <Categories>
            {categories.map(category => (
              <Tag key={category.name} to={`/${category.path}`}>
                {category.name}
              </Tag>
            ))}
          </Categories>
          <Filters>
            <i className="fa fa-filter" aria-hidden="true" />
            <Switch
              left="score"
              handleClickLeft={() => {
                this.setState({ sortedBy: 'score' });
              }}
              handleClickRight={() => {
                this.setState({ sortedBy: 'date' });
              }}
              right="date"
              active={this.state.sortedBy === 'score' ? 'left' : 'right'}
            />
          </Filters>
        </Header>
        <Entries>
          {R.compose(
            R.map(post => (
              <BlogEntry
                key={post.id}
                {...post}
                upVote={this.props.upVote}
                downVote={this.props.downVote}
                deletePost={this.props.deletePost}
                editPost={this.editPost}
              />
            )),
            R.sort(
              R.descend(
                R.prop(
                  this.state.sortedBy === 'score' ? 'voteScore' : 'timestamp',
                ),
              ),
            ),
            R.filter(post => post.deleted === false),
          )(posts)}
        </Entries>
        <Buttons>
          <Button circular onClick={() => history.push('/posts/create')}>
            <Icon className="fa fa-plus fa-2x" aria-hidden="true" />
          </Button>
        </Buttons>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    posts: postsByCategory(state, props.match.params.category),
    categories: categories(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    upVote: (id: $PropertyType<Post, 'id'>) =>
      dispatch({
        type: 'POST_CAST_VOTE_REQUEST',
        payload: { direction: 'upVote', id },
      }),
    downVote: (id: $PropertyType<Post, 'id'>) =>
      dispatch({
        type: 'POST_CAST_VOTE_REQUEST',
        payload: { direction: 'downVote', id },
      }),
    deletePost: (id: $PropertyType<Post, 'id'>) =>
      dispatch({
        type: 'POST_DELETE_REQUEST',
        payload: id,
      }),
    fetchPosts: (category?: $PropertyType<Category, 'name'>) =>
      dispatch({
        type: 'POSTS_FETCH_REQUEST',
        payload: category,
      }),
    fetchCategories: () => dispatch({ type: 'CATEGORIES_FETCH_REQUEST' }),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Home);

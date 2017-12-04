/* @flow */
import * as React from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

import { getAllPosts, getAllCategories } from '../selectors';
import { BlogEntry, Tag, Button, Switch } from '../components';
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
};

type State = {
  sortedBy: 'score' | 'date',
};

class Home extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({ type: 'POSTS_FETCH_REQUEST' });
    this.props.dispatch({ type: 'CATEGORIES_FETCH_REQUEST' });
  }

  state = {
    sortedBy: 'score',
  };

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
    const { posts, categories, history } = this.props;

    return (
      <Wrapper>
        <Header>
          <Categories>
            {categories.map(category => (
              <Tag key={category.name} to={`/categories/${category.path}`}>
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
                upVote={this.upVote}
                downVote={this.downVote}
                deletePost={this.deletePost}
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

const mapStateToProps = state => {
  return {
    posts: getAllPosts(state),
    categories: getAllCategories(state),
  };
};

export default compose(withRouter, connect(mapStateToProps))(Home);

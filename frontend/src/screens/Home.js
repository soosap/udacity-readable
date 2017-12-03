/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import type { Dispatch, Posts } from '../utils/types';

const Wrapper = styled.div``;

type Props = {
  dispatch: Dispatch,
  posts: Posts,
};

type State = {};

class Home extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({ type: 'POSTS_FETCH_REQUEST' });
  }

  state = {};

  render() {
    console.log('this.props.posts', this.props.posts);
    return <Wrapper>Home</Wrapper>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);

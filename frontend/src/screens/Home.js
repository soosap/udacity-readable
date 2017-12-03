/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import type { Dispatch } from '../utils/types';

const Wrapper = styled.div``;

type Props = {
  dispatch: Dispatch,
};
type State = {};

class Home extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({ type: 'POSTS_FETCH_REQUEST' });
  }

  state = {};

  render() {
    return (
      <Wrapper>Home</Wrapper>
    );
  }
}

export default connect()(Home);

/* @flow */
import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Home, Category, PostDetails, CreateEdit } from './screens';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1240px;
`;

type Props = {};
type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route path="/categories/:category" component={Category} />
          <Route path="/categories/:category/posts" component={CreateEdit} />
          <Route path="/categories/:category/posts/:postId" component={PostDetails} />
        </Wrapper>
      </Router>
    );
  }
}

export default App;

/* @flow */
import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { Home, Category, PostDetails, CreateEdit } from './screens';
import reducers from './reducers';
import sagas from './sagas';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1240px;
`;

/*
|-----------------------------------------------------------
| Redux
|-----------------------------------------------------------
*/
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? require('redux-devtools-extension').composeWithDevTools(
        applyMiddleware(...middleware),
      )
    : applyMiddleware(...middleware),
);

sagaMiddleware.run(sagas);


type Props = {};
type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route path="/categories/:category" component={Category} />
            <Route path="/categories/:category/posts" component={CreateEdit} />
            <Route
              path="/categories/:category/posts/:postId"
              component={PostDetails}
            />
          </Wrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;

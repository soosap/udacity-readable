/* @flow */
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { Home, PostDetails, PostCreate, PostEdit } from './screens';
import reducers from './reducers';
import sagas from './sagas';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1240px;
`;

/*
|-----------------------------------------------------------
| Global styles
|-----------------------------------------------------------
*/
injectGlobal([
  `
  @import url('https://fonts.googleapis.com/css?family=Catamaran');

  html, body {
    font-family: 'Catamaran', sans-serif !important;
    margin: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`,
]);

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
            <Switch>
              <Route path="/posts/create" component={PostCreate} />
              <Route path="/posts/:postId/edit" component={PostEdit} />            
              <Route
                path="/category/:postId"
                component={PostDetails}
              />
              <Route path="/:category" component={Home} />              
            </Switch>
          </Wrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;

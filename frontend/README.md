
## Redux flow

1. Dispatch an action through this.props.dispatch({ type: "POSTS_FETCH_REQUESTED" })
2. Let the root saga listen to that particular action, i.e. "POSTS_FETCH_REQUESTED" and when it is being observed yield the result of the associated generator function. Have a look at the **rootSaga** to see all action types and their associated generator functions/sagas.
3. All the async operations, i.e. side effects, are handled in those generator functions/sagas.


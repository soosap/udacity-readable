/* @flow */
export type Post = {};

/*
|-----------------------------------------------------------
| Redux-related type definitions
|-----------------------------------------------------------
*/
type FetchPostsAction = {
  type: 'POSTS_FETCH_REQUESTED',
};

/* eslint-disable no-use-before-define */
export type Action = FetchPostsAction;
export type ActionType = $PropertyType<Action, 'type'>;

export type State = Object;

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;
/* eslint-enable no-use-before-define */

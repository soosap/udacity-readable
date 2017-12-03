/* @flow */
export type Post = {
  id: string,
  timestamp: number,
  title: string,
  body: string,
  author: string,
  category: string,
  voteScore: number,
  deleted: boolean,
};

export type Posts = { [key: $PropertyType<Post, 'id'>]: Post };

export type Comment = {
  id: string,
  parentId: string,
  timestamp: number,
  body: string,
  author: string,
  voteScore: number,
  deleted: boolean,
  parentDeleted: boolean,
};

export type Comments = { [key: $PropertyType<Comment, 'id'>]: Comment };

/*
|-----------------------------------------------------------
| Redux-related type definitions
|-----------------------------------------------------------
*/
type PostsFetchRequestAction = { type: 'POSTS_FETCH_REQUEST' };

type PostsFetchSuccessAction = {
  type: 'POSTS_FETCH_SUCCESS',
  payload: {
    posts: Posts,
  },
};

/* eslint-disable no-use-before-define */
export type Action = PostsFetchRequestAction;
export type ActionType = $PropertyType<Action, 'type'>;

export type State = Object;

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;
/* eslint-enable no-use-before-define */

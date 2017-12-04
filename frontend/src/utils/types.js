/* @flow */
export type Category = {
  name: string,
  path: string,
};

export type Categories = { [key: $PropertyType<Category, 'name'>]: Category };

export type Post = {
  id: string,
  timestamp: number,
  title: string,
  body: string,
  author: string,
  category: string,
  voteScore: number,
  deleted: boolean,
  commentCount: number,
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
export type PostsFetchRequestAction = {
  type: 'POSTS_FETCH_REQUEST',
  payload?: string,
};
export type PostsFetchSuccessAction = {
  type: 'POSTS_FETCH_SUCCESS',
  payload: Posts,
};

export type PostFetchRequestAction = {
  type: 'POST_FETCH_REQUEST',
  payload: $PropertyType<Post, 'id'>,
};
export type PostFetchSuccessAction = {
  type: 'POST_FETCH_SUCCESS',
  payload: { post: Post, comments: Comments },
};

export type PostCastVoteRequestAction = {
  type: 'POST_CAST_VOTE_REQUEST',
  payload: { direction: 'upVote' | 'downVote', id: $PropertyType<Post, 'id'> },
};
export type PostCastVoteSuccessAction = {
  type: 'POST_CAST_VOTE_SUCCESS',
  payload: { direction: 'upVote' | 'downVote', id: $PropertyType<Post, 'id'> },
};

export type PostDeleteRequestAction = {
  type: 'POST_DELETE_REQUEST',
  payload: $PropertyType<Post, 'id'>,
};
export type PostDeleteSuccessAction = {
  type: 'POST_DELETE_SUCCESS',
  payload: $PropertyType<Post, 'id'>,
};

export type CommentCastVoteRequestAction = {
  type: 'COMMENT_CAST_VOTE_REQUEST',
  payload: {
    direction: 'upVote' | 'downVote',
    id: $PropertyType<Comment, 'id'>,
  },
};
export type CommentCastVoteSuccessAction = {
  type: 'COMMENT_CAST_VOTE_SUCCESS',
  payload: {
    direction: 'upVote' | 'downVote',
    id: $PropertyType<Comment, 'id'>,
  },
};

export type CommentDeleteRequestAction = {
  type: 'COMMENT_DELETE_REQUEST',
  payload: $PropertyType<Comment, 'id'>,
};
export type CommentDeleteSuccessAction = {
  type: 'COMMENT_DELETE_SUCCESS',
  payload: $PropertyType<Comment, 'id'>,
};

type CategoriesFetchRequestAction = { type: 'CATEGORIES_FETCH_REQUEST' };
type CategoriesFetchSuccessAction = {
  type: 'CATEGORIES_FETCH_SUCCESS',
  payload: Categories,
};

/* eslint-disable no-use-before-define */
export type Action =
  | PostsFetchRequestAction
  | PostsFetchSuccessAction
  | PostFetchRequestAction
  | PostFetchSuccessAction
  | PostCastVoteRequestAction
  | PostCastVoteSuccessAction
  | PostDeleteRequestAction
  | PostDeleteSuccessAction
  | CommentCastVoteRequestAction
  | CommentCastVoteSuccessAction
  | CommentDeleteRequestAction
  | CommentDeleteSuccessAction
  | CategoriesFetchRequestAction
  | CategoriesFetchSuccessAction;
export type ActionType = $PropertyType<Action, 'type'>;

export type State = Object;

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;
/* eslint-enable no-use-before-define */

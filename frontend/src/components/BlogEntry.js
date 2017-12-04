/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import type { Post } from '../utils/types';

type Props = Post & {
  upVote: (id: $PropertyType<Post, 'id'>) => void,
  downVote: (id: $PropertyType<Post, 'id'>) => void,
  deletePost: (id: $PropertyType<Post, 'id'>) => void,
  editPost: (id: $PropertyType<Post, 'id'>) => void,
};

const Wrapper = styled.div`
  border: 1px solid gray;
  border-bottom: none;
  padding: 0.5rem;
  padding-left: 1rem;
  display: flex;

  &:last-child {
    border-bottom: 1px solid gray;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Aside = styled.aside`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
`;

const Title = styled(Link)`
  font-weight: 600;
  font-size: 1.1rem;
  color: black;
`;

const Icon = styled.i`
  padding-left: .1rem;
  padding-right: .3rem;
  font-size: 14px !important;

  &:hover {
    cursor: pointer;
  }
`;

const Subtitle = styled.div``;

const Author = styled.em`
  color: gray;
`;

const BlogEntry = ({
  id,
  title,
  author,
  voteScore,
  commentCount,
  timestamp,
  upVote,
  downVote,
  deletePost,
  editPost,
}: Props) => {
  return (
    <Wrapper>
      <Main>
        <Title to={`/posts/${id}`}>{title}</Title>
        <Subtitle>
          posted by <Author>{author}</Author> {moment(timestamp).fromNow()} |{' '}
          {commentCount} comments
          |{' '}
          <Icon onClick={() => editPost(id)} className="fa fa-edit" aria-hidden="true" />
          |{' '}
          <Icon onClick={() => deletePost(id)} className="fa fa-trash" aria-hidden="true" />
        </Subtitle>
      </Main>
      <Aside>
        <button onClick={() => upVote(id)}>
          <i className="fa fa-chevron-up" aria-hidden="true" />
        </button>
        <button onClick={() => downVote(id)}>
          <i className="fa fa-chevron-down" aria-hidden="true" />
        </button>
        {voteScore}
      </Aside>
    </Wrapper>
  );
};

export { BlogEntry };

/* @flow */
import * as React from 'react';
import styled from 'styled-components';

import type { Comment } from '../utils/types';

const Wrapper = styled.div`
  border: 1px solid gray;
  border-bottom: none;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  display: flex;

  &:first-of-type {
    border-top: none;
  }

  &:last-of-type {
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

const Body = styled.div``;

const Footer = styled.footer`
  display: flex;
  font-size: 0.7rem;
  align-items: center;
  margin-top: .2rem;
`;

const Author = styled.em`
  color: gray;
`;

const Icon = styled.i`
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  font-size: 12px !important;

  &:hover {
    cursor: pointer;
  }
`;

type Props = Comment & {
  editComment: (id: $PropertyType<Comment, 'id'>) => void,
  deleteComment: (id: $PropertyType<Comment, 'id'>) => void,
  upVote: (id: $PropertyType<Comment, 'id'>) => void,
  downVote: (id: $PropertyType<Comment, 'id'>) => void,
};

const BlogEntryComment = ({
  id,
  author,
  body,
  voteScore,
  editComment,
  deleteComment,
  upVote,
  downVote,
}: Props) => {
  return (
    <Wrapper>
      <Main>
        <Body>{body}</Body>
        <Footer>
          posted by&nbsp;<Author>{author}</Author>&nbsp;&nbsp;
          <Icon
            onClick={() => editComment(id)}
            className="fa fa-edit"
            aria-hidden="true"
          />
          |{' '}
          <Icon
            onClick={() => deleteComment(id)}
            className="fa fa-trash"
            aria-hidden="true"
          />
        </Footer>
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

export { BlogEntryComment };

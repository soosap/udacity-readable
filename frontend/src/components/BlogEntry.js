/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import type { Post } from '../utils/types';

type Props = Post & {
  upVote: (id: $PropertyType<Post, 'id'>) => void,
  downVote: (id: $PropertyType<Post, 'id'>) => void,
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
  padding-top: .5rem;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
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
}: Props) => {
  return (
    <Wrapper>
      <Main>
        <Title>{title}</Title>
        <Subtitle>
          posted by <Author>{author}</Author> {moment(timestamp).fromNow()} |{' '}
          {commentCount} comments
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

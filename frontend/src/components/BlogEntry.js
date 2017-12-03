/* @flow */
import * as React from 'react';
import styled from 'styled-components';

import type { Post } from '../utils/types';

const Wrapper = styled.div`
  border: 1px solid gray;
  border-bottom: none;
  padding: .5rem;
  display: flex;

  &:last-child {
    border-bottom: 1px solid gray;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const Aside = styled.aside`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Subtitle = styled.div``;

const BlogEntry = ({ title, author, voteScore, commentCount }: Post) => {
  return (
    <Wrapper>
      <Main>
        <Title>{title}</Title>
        <Subtitle>posted by {author} | {commentCount} comments</Subtitle>
      </Main>
      <Aside>{voteScore}</Aside>
    </Wrapper>
  );
};

export { BlogEntry };

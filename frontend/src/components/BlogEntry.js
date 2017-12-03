/* @flow */
import * as React from 'react';
import styled from 'styled-components';

import type { Post as Props } from '../utils/types';

const Wrapper = styled.div`
  border: 1px solid gray;
  border-bottom: none;
  padding: .5rem;

  &:last-child {
    border-bottom: 1px solid gray;
  }
`;

const BlogEntry = ({ title }: Props) => {
  return (
    <Wrapper>{title}</Wrapper>
  );
};

export { BlogEntry };

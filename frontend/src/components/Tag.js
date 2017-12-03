/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  background-color: lightgray;
  border-radius: 5px;
  padding-left: .6rem;
  padding-right: .6rem;
  font-size: .8rem;
  color: black;
  margin-right: .3rem;
  text-decoration: none;
`;

type Props = {
  children: React.Node,
  to: string,
};

const Tag = ({ children, to }: Props) => {
  return (
    <Wrapper to={to}>{children}</Wrapper>
  );
};

export { Tag };

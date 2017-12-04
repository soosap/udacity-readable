/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  text-decoration: none;
  color: gray;
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  padding-right: 0.5rem;
  display: inline-block;
  margin-top: ${props => (props.text ? '-5px' : '-10px')};
`;

const Text = styled.div`
  font-size: 18px;
  padding-right: 0.5rem;
  line-height: 18px;
  text-transform: uppercase;
`;

type Props = {
  children?: string,
  to: string,
};

const Back = ({ children, to }: Props) => {
  return (
    <Wrapper to={to}>
      <Icon text={children} className="fa fa-arrow-left" />
      {children && <Text>{children}</Text>}
    </Wrapper>
  );
};

export { Back };

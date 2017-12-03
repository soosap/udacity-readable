/* @flow */
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border-radius: ${props => (props.circular ? '100%' : '5%')};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: teal;
  padding-top: 0.5rem;
  border: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

type Props = {
  children: React.Node,
  circular: boolean,
};

const Button = ({ children, circular }: Props) => {
  return <Wrapper circular={circular}>{children}</Wrapper>;
};

export { Button };

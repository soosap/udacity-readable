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
  transition: transform 0.3s ease-in-out;

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
  onClick: () => void,
  style?: Object,
};

const Button = ({ children, circular, onClick, style }: Props) => {
  return (
    <Wrapper style={style} onClick={onClick} circular={circular}>
      {children}
    </Wrapper>
  );
};

export { Button };

/* @flow */
import * as React from 'react';
import styled from 'styled-components';

const BORDER_RADIUS = '5px';

const Wrapper = styled.div`
  border: 1px solid gray;
  border-radius: ${BORDER_RADIUS};
  display: flex;
  margin-left: 0.6rem;
`;

const Toggle = styled.div`
  background-color: ${props => (props.active ? 'lightgray' : 'white')};
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  line-height: 1.2rem;
  border-top-left-radius: ${props =>
    props.position === 'left' ? BORDER_RADIUS : 0};
  border-top-right-radius: ${props =>
    props.position === 'left' ? 0 : BORDER_RADIUS};
  border-bottom-right-radius: ${props =>
    props.position === 'left' ? 0 : BORDER_RADIUS};
  border-bottom-left-radius: ${props =>
    props.position === 'left' ? BORDER_RADIUS : 0};

  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  left: string,
  right: string,
  handleClickLeft: () => void,
  handleClickRight: () => void,
  active: 'left' | 'right',
};

const Switch = ({
  left,
  right,
  handleClickLeft,
  handleClickRight,
  active,
}: Props) => {
  return (
    <Wrapper>
      <Toggle
        onClick={handleClickLeft}
        position="left"
        active={active === 'left'}
      >
        {left}
      </Toggle>
      <Toggle
        onClick={handleClickRight}
        position="right"
        active={active === 'right'}
      >
        {right}
      </Toggle>
    </Wrapper>
  );
};

export { Switch };

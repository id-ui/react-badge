import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: [
          'top',
          'topLeft',
          'topRight',
          'bottom',
          'bottomLeft',
          'bottomRight',
          'left',
          'leftTop',
          'leftBottom',
          'right',
          'rightTop',
          'rightBottom',
        ],
      },
      description: 'Badge placement',
      defaultValue: 'topRight',
      table: {
        defaultValue: { summary: 'topRight' },
      },
    },
    color: {
      control: 'text',
      description: 'Badge background color',
      defaultValue: '#9552D4',
      table: {
        defaultValue: { summary: '#9552D4' },
      },
    },
    size: {
      control: 'text',
      description: 'Badge size',
      defaultValue: '1.5rem',
      table: {
        defaultValue: { summary: '1.5rem' },
      },
    },
    className: {
      control: 'text',
      description: 'Badge className',
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
};

const BadgeWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #11afd9;
`;

export function playground(props) {
  return (
    <BadgeWrapper>
      <Badge {...props} />
    </BadgeWrapper>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 1rem;
  }
`;

export function badges() {
  return (
    <Container>
      <BadgeWrapper>
        <Badge placement="bottomLeft" />
      </BadgeWrapper>
      <BadgeWrapper>
        <Badge placement="topRight" />
      </BadgeWrapper>
      <BadgeWrapper>
        <Badge placement="bottomRight" />
      </BadgeWrapper>
      <BadgeWrapper>
        <Badge placement="topLeft" />
      </BadgeWrapper>
      <BadgeWrapper>
        <Badge placement="left" />
      </BadgeWrapper>
      <BadgeWrapper>
        <Badge placement="top" />
      </BadgeWrapper>
      <BadgeWrapper>
        <Badge placement="bottom" />
      </BadgeWrapper>
      <BadgeWrapper>
        <Badge placement="right" />
      </BadgeWrapper>
      <BadgeWrapper>
        <Badge placement="topRight" size="1.2rem">
          ❖
        </Badge>
      </BadgeWrapper>
    </Container>
  );
}

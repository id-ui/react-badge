import styled from 'styled-components';
import { prop, switchProp } from 'styled-tools';
import { css } from 'styled-components';

export const Container = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${prop('size')};
  min-width: ${prop('size')};
  height: ${prop('size')};
  min-height: ${prop('size')};
  overflow: hidden;
  border-radius: 50%;
  color: white;
  background-color: ${prop('color')};

  ${switchProp('placement', {
    top: css`
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    topRight: css`
      top: 0;
      right: 0;
      transform: translate(10%, -10%);
    `,
    topLeft: css`
      top: 0;
      left: 0;
      transform: translate(-10%, -10%);
    `,
    bottom: css`
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
    `,
    bottomRight: css`
      bottom: 0;
      right: 0;
      transform: translate(10%, 10%);
    `,
    bottomLeft: css`
      bottom: 0;
      left: 0;
      transform: translate(-10%, 10%);
    `,
    left: css`
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    `,
    leftTop: css`
      top: 0;
      left: 0;
      transform: translate(-10%, -10%);
    `,
    leftBottom: css`
      bottom: 0;
      left: 0;
      transform: translate(-10%, 10%);
    `,
    right: css`
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    `,
    rightTop: css`
      top: 0;
      right: 0;
      transform: translate(10%, -10%);
    `,
    rightBottom: css`
      bottom: 0;
      right: 0;
      transform: translate(10%, 10%);
    `,
  })};
`;

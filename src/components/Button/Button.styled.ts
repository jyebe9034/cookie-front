import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
  ORANGE, ORANGE_DARKER, ORANGE_WHITER,
  CYAN, CYAN_DARKER, CYAN_WHITER,
  GRAY, GRAY_DARKER,
} from 'constants/colors';

export default interface Props {
  color?: 'primary' | 'secondary';
  variant?: 'contain' | 'outline';
  width?: number;
  height?: number;
  disabled?: boolean;
}

export const Button = styled.button<Props>(
  css`
    width: 100%;
    height: 40px;
    border: 1px solid;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 150ms;
  `,

  ({ width }) => typeof width === 'number' && css`
    width: ${width}px;
  `,

  ({ height }) => typeof height === 'number' && css`
    height: ${height}px;
  `,

  ({ color, variant }) => color === 'primary' && variant === 'contain' && css`
    background-color: ${ORANGE};
    border-color: ${ORANGE};
    color: #fff;

    &:hover {
      background-color: ${ORANGE_DARKER};
    }
  `,

  ({ color, variant }) => color === 'primary' && variant === 'outline' && css`
    background-color: #fff;
    border-color: ${ORANGE};
    color: ${ORANGE};

    &:hover {
      background-color: ${ORANGE_WHITER};
    }
  `,

  ({ color, variant }) => color === 'secondary' && variant === 'contain' && css`
    background-color: ${CYAN};
    border-color: ${CYAN};
    color: #fff;

    &:hover {
      background-color: ${CYAN_DARKER};
    }
  `,

  ({ color, variant }) => color === 'secondary' && variant === 'outline' && css`
    background-color: #fff;
    border-color: ${CYAN};
    color: ${CYAN};

    &:hover {
      background-color: ${CYAN_WHITER};
    }
  `,

  ({ disabled }) => disabled && css`
    background-color: ${GRAY};
    border-color: ${GRAY};
    color: ${GRAY_DARKER};
    opacity: 0.4;
    cursor: default;

    &:hover {
      background-color: ${GRAY};
    }
  `,
);

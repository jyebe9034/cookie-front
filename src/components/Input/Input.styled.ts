import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
  RED, GRAY_DARKER, GRAY_WHITER, BLACK,
} from 'constants/colors';

export default interface Props {
  status?: 'none' | 'error';
  width?: number;
  height?: number;
  disabled?: boolean;
}

export const Wrap = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const Label = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${BLACK};
`;

export const Input = styled.input<Props>(
  css`
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid;
    border-color: ${GRAY_DARKER};
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 14px;
    color: ${BLACK};
    outline: none;
    transition-property: border-color;
    transition-duration: 150ms;
  `,

  ({ status }) => status === 'error' && css`
    border-color: ${RED};
  `,

  ({ width }) => typeof width === 'number' && css`
    width: ${width}px;
  `,

  ({ height }) => typeof height === 'number' && css`
    height: ${height}px;
  `,

  ({ disabled }) => disabled && css`
    background-color: ${GRAY_WHITER};
    border-color: ${GRAY_WHITER};
    color: ${GRAY_DARKER}
  `,
);

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${RED};
`;

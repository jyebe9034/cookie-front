import React, { forwardRef } from 'react';

import * as S from './Input.styled';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: 'none' | 'error';
  width?: number;
  height?: number;
  disabled?: boolean;
  label?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, errorMessage, ...props }: Props, ref) => (
    <S.Wrap>
      {label && (
        <S.Label>
          {label}
        </S.Label>
      )}
      <S.Input
        {...props}
        ref={ref}
      />
      {errorMessage && (
        <S.ErrorMessage>
          {errorMessage}
        </S.ErrorMessage>
      )}
    </S.Wrap>
  ),
);

export default Input;

Input.defaultProps = {
  status: 'none',
  width: undefined,
  height: undefined,
  disabled: false,
  label: '',
  errorMessage: '',
};

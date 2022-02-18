import React, { forwardRef } from 'react';

import * as S from './Button.styled';

export interface Props {
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary';
  variant?: 'contain' | 'outline';
  width?: number;
  height?: number;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }: Props, ref) => (
    <S.Button
      {...props}
      ref={ref}
    >
      {children}
    </S.Button>
  ),
);

export default Button;

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  variant: 'contain',
  width: undefined,
  height: undefined,
  disabled: false,
};

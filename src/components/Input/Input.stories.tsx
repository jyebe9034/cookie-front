import React from 'react';
import styled from '@emotion/styled';
import { Meta } from '@storybook/react/types-6-0';

import Input, { Props } from './Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const InputWrap = styled.div`
  & p {
    margin: 0;
  }
`;

export const basic = (args: Props) => (
  <Input {...args} />
);

export const withLabel = () => (
  <InputWrap>
    <Input
      width={500}
      label="이름"
    />
  </InputWrap>
);

export const withError = () => (
  <InputWrap>
    <Input
      status="error"
      width={500}
      value="1234"
      label="비밀번호"
      errorMessage="비밀번호가 올바르지 않습니다."
    />
  </InputWrap>
);

export const withDisabled = () => (
  <Input
    width={500}
    value="Input"
    disabled
  />
);

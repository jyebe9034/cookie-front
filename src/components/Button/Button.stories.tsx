import React from 'react';
import styled from '@emotion/styled';
import { Meta } from '@storybook/react/types-6-0';

import Button, { Props } from './Button';

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta;

export const basic = (args: Props) => (
  <Button {...args} />
);

export const withPrimary = () => (
  <ButtonGroup>
    <Button
      color="primary"
      variant="outline"
      width={120}
    >
      Button
    </Button>
    <Button
      color="primary"
      variant="contain"
      width={120}
    >
      Button
    </Button>
  </ButtonGroup>
);

export const withSecondary = () => (
  <ButtonGroup>
    <Button
      color="secondary"
      variant="outline"
      width={120}
    >
      Button
    </Button>
    <Button
      color="secondary"
      variant="contain"
      width={120}
    >
      Button
    </Button>
  </ButtonGroup>
);

export const withDisabled = () => (
  <ButtonGroup>
    <Button
      width={120}
      disabled
    >
      Button
    </Button>
  </ButtonGroup>
);

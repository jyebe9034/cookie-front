import React from 'react';
import { Provider } from 'react-redux';

interface Props {
  children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <div>{children}</div>
  );
}

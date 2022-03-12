import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import theme from './lib/theme';

interface Props {
  children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

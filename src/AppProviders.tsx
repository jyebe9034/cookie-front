import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@mui/material/styles';

import theme from './lib/theme';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function AppProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

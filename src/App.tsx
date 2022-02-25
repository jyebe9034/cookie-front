import React from 'react';

import AppProviders from 'AppProviders';
import AppRoutes from './AppRoutes';

import 'assets/styles/index.css';

function App() {
  return (
    <React.StrictMode>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </React.StrictMode>
  );
}

export default App;

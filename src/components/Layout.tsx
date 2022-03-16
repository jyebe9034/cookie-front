import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import LinearProgress from '@mui/material/LinearProgress';

import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<LinearProgress />}>
        <div className="px-10">
          <Outlet />
        </div>
      </Suspense>
    </>
  );
}

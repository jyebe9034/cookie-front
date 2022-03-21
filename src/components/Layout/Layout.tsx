import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import LinearProgress from '@mui/material/LinearProgress';

import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<LinearProgress />}>
        <div className="px-10 min-h-content">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </>
  );
}

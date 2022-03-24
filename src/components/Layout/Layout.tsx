import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import LinearProgress from '@mui/material/LinearProgress';

import Header from '../Header';
import Footer from '../Footer';

interface Props {
  header?: boolean;
  footer?: boolean;
}

export default function Layout({ header, footer }: Props) {
  return (
    <>
      {header && <Header />}
      <Suspense fallback={<LinearProgress />}>
        <div className="px-10 min-h-content">
          <Outlet />
        </div>
      </Suspense>
      {footer && <Footer />}
    </>
  );
}

Layout.defaultProps = {
  header: false,
  footer: false,
};

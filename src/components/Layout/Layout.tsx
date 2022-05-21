import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import classname from 'classnames';

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
        <div className={classname('min-h-[calc(100vh_-_80px_-_120px)] px-10', {
          'pb-28': header && footer,
        })}
        >
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

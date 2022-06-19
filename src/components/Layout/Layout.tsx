import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import classname from 'classnames';

import LinearProgress from '@mui/material/LinearProgress';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

interface Props {
  header?: boolean;
  sidebar?: boolean;
  footer?: boolean;
}

export default function Layout({ header, sidebar, footer }: Props) {
  return (
    <>
      {header && <Header />}
      <Suspense fallback={<LinearProgress />}>
        <div className="flex mt-10">
          {sidebar && <Sidebar />}
          <div className={classname('flex-1 min-h-[calc(100vh_-_84px_-_120px_-_2.5rem)] px-10', {
            'pb-28': header && footer,
          })}
          >
            <Outlet />
          </div>
        </div>
      </Suspense>
      {footer && <Footer />}
    </>
  );
}

Layout.defaultProps = {
  header: false,
  sidebar: false,
  footer: false,
};

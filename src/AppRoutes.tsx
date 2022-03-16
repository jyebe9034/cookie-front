import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';

const TestPage = lazy(() => import('pages/test/Test'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/test" element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

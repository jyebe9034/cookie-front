import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';

const TestPage = lazy(() => import('pages/test/views/TestView'));
const LoginPage = lazy(() => import('pages/login/views/LoginView'));
const JoinView = lazy(() => import('pages/join/views/JoinView'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinView />} />
        </Route>
        <Route path="/" element={<Layout header footer />}>
          <Route path="/test" element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

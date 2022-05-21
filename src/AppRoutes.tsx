import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';

const TestPage = lazy(() => import('pages/test/views/TestView'));

const JoinView = lazy(() => import('pages/join/views/JoinView'));
const LoginPage = lazy(() => import('pages/login/views/LoginView'));
const MainView = lazy(() => import('pages/main/views/MainView'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/join" element={<JoinView />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<Layout header footer />}>
          <Route path="/test" element={<TestPage />} />
          <Route path="/" element={<MainView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

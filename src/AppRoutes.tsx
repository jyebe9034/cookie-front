import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';

const TestPage = lazy(() => import('pages/test/views/TestView'));

const JoinView = lazy(() => import('pages/join/views/JoinView'));
const LoginPage = lazy(() => import('pages/login/views/LoginView'));
const MainView = lazy(() => import('pages/main/views/MainView'));
const BoardListView = lazy(() => import('pages/board/views/BoardListView'));
const BoardDetailView = lazy(() => import('pages/board/views/BoardDetailView'));
const BoardEditView = lazy(() => import('pages/board/views/BoardEditView'));
const MyPageView = lazy(() => import('pages/my-page/views/MyPageView'));

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
          <Route path="/board" element={<BoardListView />} />
          <Route path="/board/:postId" element={<BoardDetailView />} />
          <Route path="/board/add" element={<BoardEditView />} />
          <Route path="/board/:postId/edit" element={<BoardEditView />} />
        </Route>
        <Route path="/" element={<Layout header sidebar footer />}>
          <Route path="/my-page" element={<MyPageView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';

const JoinView = lazy(() => import('pages/join/views/JoinView'));
const LoginPage = lazy(() => import('pages/login/views/LoginView'));
const MainView = lazy(() => import('pages/main/views/MainView'));
const BoardListView = lazy(() => import('pages/board/views/BoardListView'));
const BoardDetailView = lazy(() => import('pages/board/views/BoardDetailView'));
const BoardEditorView = lazy(() => import('pages/board/views/BoardEditorView'));
const MyPageView = lazy(() => import('pages/my-page/views/MyPageView'));
const MyBoardView = lazy(() => import('pages/my-board/views/MyBoardView'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/join" element={<JoinView />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<Layout header footer />}>
          <Route path="/" element={<MainView />} />
          <Route path="/board" element={<BoardListView />} />
          <Route path="/board/:postId" element={<BoardDetailView />} />
          <Route path="/board/add" element={<BoardEditorView />} />
          <Route path="/board/:postId/edit" element={<BoardEditorView />} />
        </Route>
        <Route path="/" element={<Layout header sidebar footer />}>
          <Route path="/my-page" element={<MyPageView />} />
          <Route path="/my-board" element={<MyBoardView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>123</div>} />
      </Routes>
    </BrowserRouter>
  );
}

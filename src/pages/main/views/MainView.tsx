import React from 'react';

import MainBanner from '../components/MainBanner';
import MainBestList from '../components/MainBestList';
import MainNewList from '../components/MainNewList';

export default function MainView() {
  return (
    <>
      <MainBanner />
      <MainNewList />
      <MainBestList />
    </>
  );
}

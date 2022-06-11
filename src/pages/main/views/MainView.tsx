import React from 'react';

import MainBanner from '../components/MainBanner';
import MainPopularList from '../components/MainPopularList';
import MainRecentList from '../components/MainRecentList';

export default function MainView() {
  return (
    <>
      <MainBanner />
      <MainRecentList />
      <MainPopularList />
    </>
  );
}

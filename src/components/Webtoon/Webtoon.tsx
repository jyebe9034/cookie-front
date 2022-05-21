import React from 'react';

import WebtoonThumbnail from '../WebtoonThumbnail/WebtoonThumbnail';
import WebtoonInfo from './WebtoonInfo';
import WebtoonUtils from './WebtoonUtils';

export default function Webtoon() {
  return (
    <div className="flex items-center p-4">
      <WebtoonThumbnail />
      <div className="flex flex-col gap-y-1 ml-3">
        <WebtoonInfo />
        <WebtoonUtils />
      </div>
    </div>
  );
}

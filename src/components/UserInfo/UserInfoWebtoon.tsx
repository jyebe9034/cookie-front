import React from 'react';

import Webtoon from 'components/Webtoon';

export default function UserInfoWebtoon() {
  return (
    <>
      <p className="px-4 py-2 bg-gray-100 border-y text-sm">
        내 취향 웹툰
      </p>
      <div className="overflow-y-auto h-80 divide-y">
        <Webtoon />
        <Webtoon />
        <Webtoon />
        <Webtoon />
        <Webtoon />
      </div>
    </>
  );
}

import React from 'react';

import PostItem from 'components/PostItem';

export default function MainPopularList() {
  return (
    <div className="mt-28">
      <h3 className="text-3xl font-bold">
        오늘의 인기 달글 TOP 5
      </h3>
      <div className="grid gap-y-4 mt-10">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
}

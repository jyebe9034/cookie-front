import React from 'react';

import PostItem from 'components/PostItem';

export default function MyBoardView() {
  return (
    <>
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-3xl font-bold text-gray-700">
          작성한 글
        </h2>
      </div>
      <div className="grid gap-y-4 mt-10">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </>
  );
}

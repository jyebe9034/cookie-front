import React from 'react';

import PostItem from 'components/PostItem';

import useBestPosts from '../hooks/queries/useBestPosts';

export default function MainRecentList() {
  const { data } = useBestPosts();

  return (
    <div className="mt-28">
      <h3 className="text-3xl font-bold">
        오늘의 신규 달글
      </h3>
      <div className="grid gap-y-4 mt-10">
        {data?.newBoardList.map((post) => (
          <PostItem
            key={post.seq}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}

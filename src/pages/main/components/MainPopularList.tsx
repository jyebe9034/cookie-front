import React from 'react';

import PostItem from 'components/PostItem';

import useBestPosts from '../hooks/queries/useBestPosts';

export default function MainPopularList() {
  const { data } = useBestPosts();

  return (
    <div className="mt-28">
      <h3 className="text-3xl font-bold">
        오늘의 인기 달글 TOP 5
      </h3>
      <div className="grid gap-y-4 mt-10">
        {data?.bestBoardList.map((post) => (
          <PostItem
            key={post.seq}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}

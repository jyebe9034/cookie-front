import React from 'react';

import PostItem from 'components/PostItem';

import useBestPosts from '../hooks/queries/useBestPosts';

export default function MainBestList() {
  const { data: posts } = useBestPosts();

  return (
    <div className="mt-28">
      <h3 className="text-3xl font-bold">
        오늘의 인기 달글 TOP 5
      </h3>
      <div className="grid gap-y-4 mt-10">
        {posts?.bestBoardList.map((post) => (
          <PostItem
            key={post.boardSeq}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}

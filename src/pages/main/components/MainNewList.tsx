import React from 'react';

import PostItem from 'components/PostItem';

import useBestPosts from '../hooks/queries/useBestPosts';

export default function MainNewList() {
  const { data: posts } = useBestPosts();

  return (
    <div className="mt-28">
      <h3 className="text-3xl font-bold">
        오늘의 신규 달글
      </h3>
      <div className="grid gap-y-4 mt-10">
        {posts?.newBoardList.map((post) => (
          <PostItem
            key={post.boardSeq}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}

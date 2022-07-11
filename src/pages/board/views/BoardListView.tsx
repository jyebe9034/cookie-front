import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import PostItem from 'components/PostItem';
import BoardListSearch from '../components/BoardListSearch';

import usePosts from '../hooks/queries/usePosts';

export default function BoardListView() {
  const navigate = useNavigate();
  const { data: posts } = usePosts();

  return (
    <>
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-3xl font-bold text-gray-700">
          게시판
        </h2>
        <div className="flex items-center gap-x-12">
          <BoardListSearch />
          <Button
            type="button"
            size="large"
            variant="contained"
            disableElevation
            onClick={() => navigate('/board/add')}
          >
            작성하기
          </Button>
        </div>
      </div>

      <div className="grid gap-y-4 mt-10">
        {posts?.map((post) => (
          <PostItem
            key={post.boardSeq}
            post={post}
          />
        ))}
      </div>
    </>
  );
}

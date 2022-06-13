import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import PostItem from 'components/PostItem';

export default function BoardListView() {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-3xl font-bold text-gray-700">
          게시판
        </h2>
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

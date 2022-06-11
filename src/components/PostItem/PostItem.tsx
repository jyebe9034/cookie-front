import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import WebtoonThumbnail from 'components/WebtoonThumbnail';

import PostItemInfo from './PostItemInfo';

export default function PostItem() {
  return (
    <div className="flex items-center p-5 rounded-lg transition-colors hover:bg-gray-100">
      <Link
        to="/"
        className="flex flex-1 items-center gap-x-5 mr-6"
      >
        <WebtoonThumbnail size="large" />
        <PostItemInfo />
      </Link>
      <Button
        type="button"
        size="large"
        variant="outlined"
        disableElevation
      >
        웹툰 보기
      </Button>
    </div>
  );
}

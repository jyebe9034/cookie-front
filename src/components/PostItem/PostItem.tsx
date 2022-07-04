import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import { Post } from 'types/Post';

import WebtoonThumbnail from 'components/WebtoonThumbnail';

import PostItemInfo from './PostItemInfo';

interface Props {
  post: Post;
}

export default function PostItem({ post }: Props) {
  return (
    <div className="flex items-center p-5 rounded-lg transition-colors hover:bg-gray-100">
      <Link
        to={`/board/${post.boardSeq}`}
        className="flex flex-1 items-center gap-x-5 mr-6"
      >
        <WebtoonThumbnail
          size="large"
          src={post?.thumbnailPath}
        />
        <PostItemInfo post={post} />
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

import React from 'react';

import IconVisibility from '@mui/icons-material/Visibility';
import IconFavorite from '@mui/icons-material/Favorite';
import IconChat from '@mui/icons-material/Chat';

import { Post } from 'types/Post';

interface Props {
  post?: Post;
}

export default function PostInfo({ post }: Props) {
  return (
    <>
      <div className="flex items-center gap-x-1.5 text-gray-400">
        <IconVisibility />
        {post?.readCount}
      </div>
      <div className="flex items-center gap-x-1.5 text-gray-400">
        <IconFavorite />
        {post?.likeCount}
      </div>
      <div className="flex items-center gap-x-1.5 text-gray-400">
        <IconChat />
        {post?.commentCount}
      </div>
    </>
  );
}

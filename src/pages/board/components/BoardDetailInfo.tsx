import React from 'react';

import Avatar from '@mui/material/Avatar';

import { Post } from 'types/Post';

import PostInfo from 'components/PostInfo';

interface Props {
  post?: Post;
}

export default function BoardDetailInfo({ post }: Props) {
  return (
    <div className="flex items-center gap-x-4 mt-5">
      <Avatar sx={{ width: 50, height: 50 }} />
      <div>
        <p>
          {post?.nickname}
        </p>
        <div className="flex items-center gap-x-4">
          <PostInfo post={post} />
        </div>
      </div>
    </div>
  );
}

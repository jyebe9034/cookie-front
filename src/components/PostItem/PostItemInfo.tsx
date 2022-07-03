import React from 'react';

import { Post } from 'types/Post';

import Tag from 'components/Tag';
import PostInfo from 'components/PostInfo';

interface Props {
  post: Post;
}

export default function PostItemInfo({ post }: Props) {
  return (
    <div className="grid flex-1 gap-y-3">
      <div className="flex gap-x-2">
        <Tag name="네이버" />
        <Tag name={post.genre} />
      </div>

      <p className="text-lg truncate">
        {post.title}
      </p>

      <div className="flex items-center gap-x-4 -mt-1">
        <PostInfo post={post} />
      </div>
    </div>
  );
}

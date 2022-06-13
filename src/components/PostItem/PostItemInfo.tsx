import React from 'react';

import Tag from 'components/Tag';
import PostInfo from 'components/PostInfo';

export default function PostItemInfo() {
  return (
    <div className="grid flex-1 gap-y-3">
      <div className="flex gap-x-2">
        <Tag name="네이버" />
        <Tag name="드라마" />
      </div>

      <p className="text-lg truncate">
        달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목
      </p>

      <div className="flex items-center gap-x-4 -mt-1">
        <PostInfo />
      </div>
    </div>
  );
}

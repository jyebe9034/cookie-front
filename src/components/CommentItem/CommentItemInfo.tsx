import React from 'react';

import Tag from 'components/Tag';

export default function CommentItemInfo() {
  return (
    <div className="grid flex-1 gap-y-3">
      <div className="flex gap-x-2">
        <span>쿠키몬스터</span>
        <span>21:24</span>
        <Tag name="N" />
      </div>

      <p className="text-md truncate">
        쿠키몬스터가 댓글을 남겼습니다.
      </p>
    </div>
  );
}

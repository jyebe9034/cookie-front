import React from 'react';

import BoardDetailLikeButton from './BoardDetailLikeButton';
import BoardDetailDeleteButton from './BoardDetailDeleteButton';
import BoardDetailEditButton from './BoardDetailEditButton';

export default function BoardDetailUtils() {
  return (
    <div className="flex items-center justify-between">
      <BoardDetailLikeButton />
      <div className="flex gap-x-2">
        <BoardDetailEditButton />
        <BoardDetailDeleteButton />
      </div>
    </div>
  );
}

import React from 'react';

import BoardDetailLikeButton from './BoardDetailLikeButton';
import BoardDetailRemoveButton from './BoardDetailRemoveButton';

export default function BoardDetailUtils() {
  return (
    <div className="flex justify-between">
      <BoardDetailLikeButton />
      <div className="flex gap-x-4">
        <BoardDetailRemoveButton />
      </div>
    </div>
  );
}

import React from 'react';

import BoardDetailLikeButton, { Props as BoardDetailLikeButtonProps } from './BoardDetailLikeButton';
import BoardDetailDeleteButton from './BoardDetailDeleteButton';
import BoardDetailEditButton from './BoardDetailEditButton';

export default function BoardDetailUtils(props: BoardDetailLikeButtonProps) {
  return (
    <div className="flex items-center justify-between">
      <BoardDetailLikeButton {...props} />
      <div className="flex gap-x-2">
        <BoardDetailEditButton />
        <BoardDetailDeleteButton />
      </div>
    </div>
  );
}

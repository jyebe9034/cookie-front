import React from 'react';

import CommentItem from 'components/CommentItem';
import CommentEditor from 'components/CommentItem/CommentEditor';
import BoardDetailTitle from '../components/BoardDetailTitle';
import BoardDetailInfo from '../components/BoardDetailInfo';
import BoardDetailContent from '../components/BoardDetailContent';
import BoardDetailUtils from '../components/BoardDetailUtils';

export default function BoardDetailView() {
  return (
    <>
      <div className="pb-7 border-b">
        <BoardDetailTitle />
        <BoardDetailInfo />
      </div>
      <div className="min-h-[600px] mt-7">
        <BoardDetailContent />
      </div>
      <div className="mt-7 pt-4 border-t">
        <BoardDetailUtils />
      </div>

      <div className="grid gap-y-4 mt-10">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
      <div className="grid mt-3">
        <CommentEditor />
      </div>
    </>
  );
}

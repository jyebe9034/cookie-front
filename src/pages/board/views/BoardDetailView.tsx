import React from 'react';

import BoardDetailTitle from '../components/BoardDetailTitle';
import BoardDetailInfo from '../components/BoardDetailInfo';
import BoardDetailContent from '../components/BoardDetailContent';
import BoardDetailUtils from '../components/BoardDetailUtils';

export default function BoardDetailView() {
  return (
    <>
      <div className="mt-10 pb-7 border-b">
        <BoardDetailTitle />
        <BoardDetailInfo />
      </div>
      <div className="mt-7">
        <BoardDetailContent />
      </div>
      <div className="mt-7 border-t">
        <BoardDetailUtils />
      </div>
    </>
  );
}

import React from 'react';

import Tag from 'components/Tag';

export default function BoardDetailTitle() {
  return (
    <>
      <div className="flex gap-x-2">
        <Tag name="네이버" />
        <Tag name="드라마" />
      </div>
      <h2 className="mt-2 text-3xl font-bold leading-snug">
        글 제목 입니다.
      </h2>
    </>
  );
}

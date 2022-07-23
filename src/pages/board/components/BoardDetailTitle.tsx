import React from 'react';

import Tag from 'components/Tag';

interface Props {
  title?: string;
  genre?: string;
}

export default function BoardDetailTitle({ title, genre }: Props) {
  return (
    <>
      <div className="flex gap-x-2">
        <Tag name="네이버" />
        <Tag name={genre} />
      </div>
      <h2 className="mt-2 text-3xl font-bold leading-snug">
        {title}
      </h2>
    </>
  );
}

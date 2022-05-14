import React from 'react';
import classname from 'classnames';

interface Props {
  name: string;
}

export default function Tag({ name }: Props) {
  return (
    <div className={classname('inline-block px-3 py-1 rounded-md font-medium', {
      'bg-naver': name === '네이버',
      'bg-violet-400': name === '드라마',
      'text-white': name === '네이버' || name === '드라마',
    })}
    >
      {name}
    </div>
  );
}

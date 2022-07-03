import React from 'react';
import classname from 'classnames';

interface Props {
  name: string;
}

export default function Tag({ name }: Props) {
  return (
    <div className={classname('inline-block px-3 py-1 rounded-md font-medium text-white', {
      'bg-naver': name === '네이버',
      'bg-violet-400': name === '일상',
      'bg-blue-400': name === '개그',
      'bg-teal-400': name === '판타지',
      'bg-amber-400': name === '액션',
      'bg-pink-400': name === '드라마',
      'bg-indigo-400': name === '순정',
      'bg-orange-400': name === '감성',
      'bg-emerald-400': name === '스릴러',
      'bg-fuchsia-400': name === '무협/사극',
      'bg-rose-400': name === '스포츠',
      'bg-lime-500': name === '에피소드',
      'bg-purple-400': name === '옴니버스',
      'bg-sky-400': name === '스토리',
    })}
    >
      {name}
    </div>
  );
}

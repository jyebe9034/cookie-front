import React from 'react';

import { Webtoon } from 'types/Webtoon';

interface Props {
  webtoon: Webtoon;
}

export default function WebtoonInfo({ webtoon }: Props) {
  return (
    <ul className="flex">
      <li className="flex overflow-hidden after:content-['/'] after:block after:mx-1.5">
        <p className="truncate">
          {webtoon.title}
        </p>
      </li>
      <li className="shrink-0">
        <p>
          {webtoon.genre}
        </p>
      </li>
    </ul>
  );
}

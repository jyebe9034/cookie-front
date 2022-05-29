import React from 'react';

export default function WebtoonInfo() {
  return (
    <ul className="flex">
      <li className="flex overflow-hidden after:content-['/'] after:block after:mx-1.5">
        <p className="truncate">
          세상에서 가장 긴 웹툰 제목입니다. 세상에서 가장 긴 웹툰 제목입니다.
        </p>
      </li>
      <li className="shrink-0">
        <p>장르 이름</p>
      </li>
    </ul>
  );
}

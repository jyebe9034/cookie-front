import React from 'react';
import { Link } from 'react-router-dom';

export default function WebtoonUtils() {
  return (
    <ul className="flex gap-x-2">
      <li className="flex-1">
        <a
          href="/"
          target="_blank"
          className="block py-1.5 border-[1px] rounded text-xs text-center text-gray-500 transition-colors hover:bg-gray-100"
        >
          웹툰 보기
        </a>
      </li>
      <li className="flex-1">
        <Link
          to="/"
          className="block py-1.5 border-[1px] rounded text-xs text-center text-gray-500 transition-colors hover:bg-gray-100"
        >
          달글 보기
        </Link>
      </li>
    </ul>
  );
}

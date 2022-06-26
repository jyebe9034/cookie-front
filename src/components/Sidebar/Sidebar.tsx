import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul className="flex flex-col gap-y-4 mb-10 px-10 border-r">
      <li>
        <Link
          to="/my-page"
          className="block p-2 text-xl hover:text-red-500 transition-colors"
        >
          마이 페이지
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="block p-2 text-xl hover:text-red-500 transition-colors"
        >

          작성한 글/댓글
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="block p-2 text-xl hover:text-red-500 transition-colors"
        >
          좋아요한 글
        </Link>
      </li>
    </ul>
  );
}

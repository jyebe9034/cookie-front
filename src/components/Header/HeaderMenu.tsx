import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
  return (
    <ul className="flex gap-2 ml-10">
      <li>
        <Link
          to="/test"
          className="px-4 py-3 text-lg"
        >
          테스트
        </Link>
      </li>
      <li>
        <Link
          to="/board"
          className="px-4 py-3 text-lg"
        >
          게시판
        </Link>
      </li>
    </ul>
  );
}

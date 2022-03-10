import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex items-center px-10 py-6">
      <Link to="/">
        <h1 className="font-bold text-2xl">tumuto</h1>
      </Link>
      <ul className="flex gap-2 ml-10">
        <li>
          <Link to="/board" className="px-4 py-3 text-lg">게시판</Link>
        </li>
      </ul>
    </div>
  );
}

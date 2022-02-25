import React from 'react';

export default function Header() {
  return (
    <div className="flex items-center px-10 py-6">
      <a href="/">
        <h1 className="font-bold text-2xl">🍪 Cookie Monster</h1>
      </a>
      <ul className="flex gap-2 ml-10">
        <li>
          <a href="/1" className="px-4 py-3 text-lg">게시판</a>
        </li>
        <li>
          <a href="/1" className="px-4 py-3 text-lg">공지사항</a>
        </li>
      </ul>
    </div>
  );
}

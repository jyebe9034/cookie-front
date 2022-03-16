import React from 'react';

export default function Footer() {
  return (
    <div className="flex items-center justify-between px-10 py-12 bg-gray-600">
      <p className="text-gray-400">
        이메일:
        <a
          href="mailto:cookiemonsterdevelopers@gmail.com"
          className="ml-2 hover:underline"
        >
          cookiemonsterdevelopers@gmail.com
        </a>
      </p>
      <p className="text-gray-500">
        ⓒCookie Moster
      </p>
    </div>
  );
}
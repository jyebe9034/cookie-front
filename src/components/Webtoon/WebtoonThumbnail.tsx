import React from 'react';

export default function WebtoonThumbnail() {
  return (
    <div className="shrink-0 overflow-hidden relative w-16 h-16 bg-gray-600 rounded-md">
      {/* <img src="" /> */}
      <div className="flex items-center justify-center absolute bottom-0 w-5 h-5 bg-naver rounded-tr-md">
        <p className="font-bold text-sm text-white">
          N
        </p>
      </div>
    </div>
  );
}

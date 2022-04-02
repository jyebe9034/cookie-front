import React, { useState } from 'react';

export default function Test() {
  const [data, setData] = useState<number | null>(null);

  const handleFetchString = () => {
    setData(1);
  };

  const handleFetchNumber = () => {
    setData(0);
  };

  return (
    <>
      <button
        type="button"
        className="px-4 py-2 border-2"
        onClick={handleFetchString}
      >
        /api/test/&#123;string&#125; 요청
      </button>
      <button
        type="button"
        className="ml-4 px-4 py-2 border-2"
        onClick={handleFetchNumber}
      >
        /api/test/&#123;number&#125; 요청
      </button>
      <button
        type="button"
        className="ml-4 px-4 py-2 border-2"
        onClick={() => setData(null)}
      >
        데이터 리셋
      </button>
      <p className="mt-4">
        {data === null ? '데이터가 없습니다.' : data}
      </p>
    </>
  );
}

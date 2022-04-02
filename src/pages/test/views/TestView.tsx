import React, { useState } from 'react';
import useTest from '../hooks/useTest';

export default function Test() {
  const [url, setUrl] = useState<string | number | null>(null);
  const { data } = useTest({ url });

  return (
    <>
      <button
        type="button"
        className="px-4 py-2 border-2"
        onClick={() => setUrl('string')}
      >
        /api/test/&#123;string&#125; 요청
      </button>
      <button
        type="button"
        className="ml-4 px-4 py-2 border-2"
        onClick={() => setUrl(1)}
      >
        /api/test/&#123;number&#125; 요청
      </button>
      <p className="mt-4">
        {JSON.stringify(data)}
      </p>
    </>
  );
}

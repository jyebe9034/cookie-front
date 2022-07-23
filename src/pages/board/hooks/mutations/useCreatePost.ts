import { useMutation } from 'react-query';

import fetch from 'lib/fetch';

export interface Params {
  webtoonSeq: number | null;
  title: string;
  contents: string;
  userSeq: number;
}

export default function useCreatePost() {
  return useMutation((data: Params) => {
    return fetch(
      '/api/board',
      {
        method: 'POST',
        body: JSON.stringify(data),
      },
    );
  });
}

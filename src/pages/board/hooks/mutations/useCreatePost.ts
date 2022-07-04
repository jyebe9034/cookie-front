import { useMutation } from 'react-query';

export interface Params {
  webtoonSeq: number;
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    );
  });
}

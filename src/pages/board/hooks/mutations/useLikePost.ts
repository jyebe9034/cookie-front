import { useMutation } from 'react-query';

interface Params {
  boardSeq?: string;
}

export default function useLikePost() {
  return useMutation((data: Params) => {
    return fetch(
      '/api/board/like',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    );
  });
}

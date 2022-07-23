import { useMutation } from 'react-query';

import fetch from 'lib/fetch';

interface Params {
  boardSeq?: string;
}

export default function useLikePost() {
  return useMutation((data: Params) => {
    return fetch(
      '/api/board/like',
      {
        method: 'POST',
        body: JSON.stringify(data),
      },
    );
  });
}

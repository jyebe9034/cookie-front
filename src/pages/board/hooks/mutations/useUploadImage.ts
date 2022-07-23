import { useMutation } from 'react-query';

import fetch from 'lib/fetch';

export default function useUploadImage() {
  return useMutation((data: FormData) => {
    return fetch(
      '/api/board/editor/image',
      {
        method: 'POST',
        body: data,
      },
    );
  });
}

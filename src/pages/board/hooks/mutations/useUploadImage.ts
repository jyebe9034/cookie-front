import { useMutation } from 'react-query';

export default function useUploadImage() {
  return useMutation((data: FormData) => {
    return fetch(
      '/api/board/editor/image',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      },
    );
  });
}

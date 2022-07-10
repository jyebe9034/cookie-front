import { useMutation } from 'react-query';

interface Params {
  id?: string;
}

export default function useDeletePost() {
  return useMutation(({ id }: Params) => {
    return fetch(
      `/api/board/${id}`,
      { method: 'DELETE' },
    );
  });
}

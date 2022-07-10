import { useQuery, UseQueryOptions } from 'react-query';

import { Response } from 'types/Response';
import { Post } from 'types/Post';

interface Params {
  id?: string;
}

export default function usePost(
  { id }: Params,
  options?: UseQueryOptions<Response<Post>, unknown, Post, Array<string>>,
) {
  return useQuery(
    ['post', String(id)],
    async () => {
      const response = await fetch(`/api/board/${id}`);
      return response.json();
    },
    {
      enabled: !!id,
      select: (response) => response.data,
      ...options,
    },
  );
}

import { useQuery, UseQueryOptions } from 'react-query';

import fetch from 'lib/fetch';

import { Response } from 'types/Response';
import { PostDetail } from 'types/Post';

interface Params {
  id?: string;
}

export default function usePost(
  { id }: Params,
  options?: UseQueryOptions<Response<PostDetail>, unknown, PostDetail, Array<string>>,
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

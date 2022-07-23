import { useQuery, UseQueryOptions } from 'react-query';

import fetch from 'lib/fetch';

import { Response } from 'types/Response';
import { Post } from 'types/Post';

interface Params {
  title: string;
}

export default function usePosts(
  { title }: Params,
  options?: UseQueryOptions<Response<Post[]>, unknown, Post[], Array<string>>,
) {
  return useQuery(
    ['posts'],
    async () => {
      const response = await fetch(`/api/board?title=${title}`);
      return response.json();
    },
    {
      select: (response) => response.data,
      ...options,
    },
  );
}

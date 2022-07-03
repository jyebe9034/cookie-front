import { useQuery, UseQueryOptions } from 'react-query';

import { Response } from 'types/Response';
import { Post } from 'types/Post';

export default function usePosts(
  options?: UseQueryOptions<Response<Post[]>, unknown, Post[], Array<string>>,
) {
  return useQuery(
    ['posts'],
    async () => {
      const response = await fetch('/api/board');
      return response.json();
    },
    {
      select: (response) => response.data,
      ...options,
    },
  );
}

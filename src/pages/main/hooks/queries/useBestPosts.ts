import { useQuery, UseQueryOptions } from 'react-query';

import fetch from 'lib/fetch';

import { BestPosts } from 'types/Post';

export default function useBestPosts(
  options?: UseQueryOptions<BestPosts, unknown, BestPosts, Array<string>>,
) {
  return useQuery(
    ['best-posts'],
    async () => {
      const response = await fetch('/api/board/main/best');
      return response.json();
    },
    { ...options },
  );
}

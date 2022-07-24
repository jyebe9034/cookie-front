import { useQuery, UseQueryOptions } from 'react-query';

import fetch from 'lib/fetch';

import { Webtoon } from 'types/Webtoon';

interface Params {
  title: string;
}

export default function useWebtoons(
  { title }: Params,
  options?: UseQueryOptions<Webtoon[], unknown, Webtoon[], Array<string>>,
) {
  return useQuery(
    ['webtoons', title],
    async () => {
      const response = await fetch(`/api/webtoon/search/${title}`);
      return response.json();
    },
    {
      enabled: !!title,
      ...options,
    },
  );
}

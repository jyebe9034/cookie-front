import { useQuery } from 'react-query';

interface Props {
  url: string | number | null;
}

export default function useTest({ url }: Props) {
  return useQuery(
    ['test-string', url],
    async () => {
      const response = await fetch(`http://www.tumuto.kr/api/test/${url}`);
      const data = await response.json();
      return data;
    },
    {
      enabled: url !== null,
      retry: 0,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  );
}

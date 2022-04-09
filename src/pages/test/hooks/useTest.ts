import { useQuery } from 'react-query';

interface Props {
  url: string | number | null;
}

export default function useTest({ url }: Props) {
  return useQuery(
    'test-string',
    async () => {
      const response = await fetch(`http://13.124.81.241:8080/api/test/${url}`);
      return response.json();
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

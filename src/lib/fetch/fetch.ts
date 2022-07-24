export default function fetchAPI(input: string, init?: RequestInit): Promise<Response> {
  return fetch(
    input,
    {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer',
      },
    },
  );
}

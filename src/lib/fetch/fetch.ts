export default function fetchAPI(input: string, init?: RequestInit): any {
  return fetch(
    input,
    {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        // TODO 임시 토큰 교체 필요
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJuaWNrbmFtZSI6Iuy_oO2CpCIsImlkIjoiMjIwMzkwMzY2NyIsImV4cCI6MTY1OTYxNzI2OTcxMywiaWF0IjoxNjU4MDU3MjY5NzEzLCJzZXEiOjMyfQ.xknlnt5sVIov7cbZrmhCUGln2N9O6A7vNGVeYYJ5p4e82pCFD2W05eka_EWyIDek6NMXE9TR0z6r9lpA80KJPQ',
      },
    },
  );
}

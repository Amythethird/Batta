import { useEffect, useState } from "react";

export default function useApi(query: string) {
  const [result, setResult] = useState({} as Response);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(`http://localhost:2500/graphql`);
      setResult(response);
    }

    fetchApi();
  }, [query]);

  return result;
}

export async function save(saveData: any, type: string) {
  const url = `https://backend.localhost/data?type=${type}`;

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(saveData),
    mode: "cors",
  });
}

export async function getData(type: string) {
  const url = `https://backend.localhost/data/${type}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}

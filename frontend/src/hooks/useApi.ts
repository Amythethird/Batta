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

import { useEffect } from "react";

export default function useApi(
  query: string,
  // eslint-disable-next-line no-unused-vars
  responseHandler: (response: any) => any,
  useApiWhenChanged: any[]
) {
  useEffect(() => {
    async function fetchApi() {
      const accessToken = sessionStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Login required!");
      }
      const response = await fetch(
        // eslint-disable-next-line no-undef
        `${process.env.REACT_APP_STRAPI}/graphql`,
        {
          method: "POST",
          body: JSON.stringify({ query }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      responseHandler(await response.json());
    }

    fetchApi();
  }, [...useApiWhenChanged]);
}

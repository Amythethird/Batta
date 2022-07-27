import { useEffect } from "react";

export default function useApi(
  query: string,
  // eslint-disable-next-line no-unused-vars
  responseHandler: (response: any) => any,
  useApiWhenChanged: any[]
) {
  useEffect(() => {
    async function fetchApi() {
      let accessToken = sessionStorage.getItem("accessToken") ?? "";
      if (!accessToken) {
        //TODO: REMOVE WORKAROUND
        const tokenRes = await fetch(
          // eslint-disable-next-line no-undef
          "https://strapi.localhost/api/auth/local",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              identifier: "frontend",
              password: "Gourmet1234",
            }),
          }
        );
        accessToken = (await tokenRes.json()).jwt;
        sessionStorage.setItem("accessToken", accessToken);
        //throw new Error("Login required!");
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

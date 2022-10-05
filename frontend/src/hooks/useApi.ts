import { useEffect } from "react";
import { getAccessToken } from "../apiUtils/login-utils";

export default function UseApi(
  query: string,
  // eslint-disable-next-line no-unused-vars
  responseHandler: (response: any) => any,
  useApiWhenChanged: any[],
  authRequired = true
) {
  useEffect(() => {
    async function fetchApi() {
      const accessToken = getAccessToken();
      if (authRequired && !accessToken) {
        throw new Error("Login required!");
      }

      let headers: any = {
        "Content-Type": "application/json",
      };
      if (authRequired) {
        headers["Authorization"] = `Bearer ${accessToken}`;
      }

      const response = await fetch(
        // eslint-disable-next-line no-undef
        `${process.env.REACT_APP_STRAPI}/graphql`,
        {
          method: "POST",
          body: JSON.stringify({ query }),
          headers,
        }
      );

      responseHandler(await response.json());
    }

    fetchApi();
  }, [...useApiWhenChanged]);
}

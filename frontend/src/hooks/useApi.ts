import { useEffect } from "react";
import { useAppSelector } from "../state/hooks.state";
import { selectLogin } from "../state/slices/login.state";

export default function useApi(
  query: string,
  // eslint-disable-next-line no-unused-vars
  responseHandler: (response: any) => any,
  useApiWhenChanged: any[]
) {
  const loginData = useAppSelector(selectLogin);

  useEffect(() => {
    async function fetchApi() {
      const accessToken = loginData.jwt;

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

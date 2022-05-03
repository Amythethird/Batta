import { fetchData } from "../commonFunctions.ts";

// deno-lint-ignore no-explicit-any
export default function register(router: any) {
  // deno-lint-ignore no-explicit-any
  router.get(`/`, async (ctx: any) => {
    ctx.response.body = await fetchData("get", "shops");
  });
}

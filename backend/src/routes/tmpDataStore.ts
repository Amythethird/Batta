import { Router } from "https://deno.land/x/oak@v10.5.1/router.ts";
import { fs, PATH } from "../../deps.ts";
const prefix = "data";
const rootTmpData = PATH.join(
  PATH.dirname(PATH.fromFileUrl(import.meta.url)),
  "..",
  "tmpData"
);

export default function register(router: Router) {
  router.post(`/${prefix}`, async (ctx) => {
    const data: JSON[] = [await ctx.request.body().value];
    const type = ctx.request.url.searchParams.get("type") ?? "data";
    const path = PATH.join(rootTmpData, `${type}.json`);
    if (await fs.exists(path))
      data.push(...JSON.parse(await Deno.readTextFile(path)));
    else await fs.ensureFile(path);
    await Deno.writeTextFile(path, JSON.stringify(data));
    ctx.response.body = `${PATH.basename(path)} saved`;
  });

  router.get(`/${prefix}/:type`, async (ctx) => {
    const type = ctx.params.type;
    const path = PATH.join(rootTmpData, `${type}.json`);
    if (await fs.exists(path))
      ctx.response.body = await Deno.readTextFile(path);
    else {
      ctx.response.status = 404;
      ctx.response.body = "Keine Daten gefunden";
    }
  });
}

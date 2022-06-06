import { Router, Server, cors } from "../deps.ts";
import tmpDataRoutes from "./routes/tmpDataStore.ts";

const url = `https://backend.localhost`;
const router = new Router();
console.log(url);
Server.use(cors({ origin: true }));

//register all Routes
tmpDataRoutes(router);

Server.use(router.routes());
Server.use(router.allowedMethods());
Server.use((ctx) => {
  ctx.response.body = "Connected!";
});
await Server.listen({ port: 5000 });

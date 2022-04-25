import { Application,Router } from "https://deno.land/x/oak/mod.ts";
import { Arango as ArangoDb } from "https://deno.land/x/darango/mod.ts";

export const Server=new Application()
export const router=new Router
export const Arango=ArangoDb

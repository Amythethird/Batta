import { Application,Router as R} from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { Arango as ArangoDb} from "https://deno.land/x/darango@0.1.6/mod.ts";

export const Server=new Application()
export const Router=R
export const Arango=ArangoDb

import {
  Application,
  Router as R,
} from "https://deno.land/x/oak@v10.5.1/mod.ts";
import * as fileSystem from "https://deno.land/std@0.142.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.141.0/path/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

export const Server = new Application();
export const Router = R;
export const PATH = path;
export const fs = fileSystem;
export const cors = oakCors;

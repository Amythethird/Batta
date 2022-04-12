import { serve as Server } from "https://deno.land/std@0.134.0/http/server.ts";
import { config } from 'https://deno.land/x/dotenv@v1.0.1/mod.ts';

config({path:'../.env',safe:true,export:true})
export const dotenv=config()
export const serve=Server
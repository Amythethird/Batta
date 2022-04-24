import {serve} from './deps.ts';

const port=5000
const url=`http://localhost:${port}`
console.log(url);
await serve((_req) => new Response("Hello WTW Team.  This is the DENO backend\n"), {port});

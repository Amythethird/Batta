import {dotenv,serve} from './deps.ts';

const url=`http://localhost:${dotenv.PORT}`
console.log(url);
serve((_req) => new Response("Hello World\n"), {port:parseInt(dotenv.PORT)}).then(r => console.log(r));
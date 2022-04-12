import {dotenv,serve} from './deps.ts';
console.log(`http://localhost:${dotenv.PORT}/`);
serve((req) => new Response("Hello World\n"), {port:parseInt(dotenv.PORT)}).then(r => console.log(r));
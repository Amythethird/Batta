import {Server} from '../deps.ts';
import router from './routes.ts'

const port=5000
const url=`http://localhost:${port}`
console.log(url);
Server.use(router.routes())
Server.use(router.allowedMethods())
Server.use(ctx=>{
    ctx.response.body='Connected!'
})
await Server.listen({port})

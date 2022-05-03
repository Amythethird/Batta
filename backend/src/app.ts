import {Router, Server} from '../deps.ts';
import shopRoutes from './routes/shop.ts'

const url=`https://backend.localhost`
const router=new Router()
console.log(url);

//register all Routes
shopRoutes(router)

Server.use(router.routes())
Server.use(router.allowedMethods())
Server.use(ctx=>{
    ctx.response.body='Connected!'
})
await Server.listen({port:5000})

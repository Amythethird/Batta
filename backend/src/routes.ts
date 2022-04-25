import {router} from "../deps.ts";
import {getDocument} from "./database.ts";

router.get('/shop',async ctx=>{
    ctx.response.body=await getDocument('shops')
})

router.get('/shop/:key',async ctx=>{
    ctx.response.body=await getDocument('shops', ctx.params.key)
})

export default router

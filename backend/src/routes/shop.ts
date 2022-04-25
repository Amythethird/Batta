import {getDocument} from "../database.ts";
const prefix='shop'
const collection='shops'

export default function register(router:any){
    router.get(`/${prefix}`,async (ctx:any)=>{
        ctx.response.body=await getDocument(collection)
    })

    router.get(`/${prefix}/:key`,async (ctx:any)=>{
        ctx.response.body=await getDocument(collection, ctx.params.key)
    })
}

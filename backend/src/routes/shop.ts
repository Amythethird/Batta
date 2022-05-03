import {fetchData} from "../commonFunctions.ts";
const prefix='shop'

export default function register(router:any){
    router.get(`/${prefix}s`,async (ctx:any)=>{
        ctx.response.body=await fetchData('get','shops')
    })
    router.get(`/${prefix}/:id`,async (ctx:any)=>{
        ctx.response.body=await fetchData('get',`shops/${ctx.params.id}`)
    })
}

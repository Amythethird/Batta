import {fetchData} from "../commonFunctions.ts";

export default function register(router:any){
    router.get(`/`,async (ctx:any)=>{
        ctx.response.body=await fetchData('get','shops')
    })
}

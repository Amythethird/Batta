export default function register(router:any){
    router.get(`/`,async (ctx:any)=>{
        ctx.response.body='BLAH'
    })
}

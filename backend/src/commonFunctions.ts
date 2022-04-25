export function getEnv(name:string){
    return Deno.env.get(name) ?? ''
}

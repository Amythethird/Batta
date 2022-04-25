import {Arango} from '../deps.ts'
import {getEnv} from "./commonFunctions.ts";
let db=await connect()

async function connect(){
    return await Arango.basicAuth({
        uri: `http://arangodb:8529/_db/${getEnv('DB')}`,
        username: getEnv('DB_USER'),
        password: getEnv('DB_PASS'),
    });
}

async function getCollection(name:string){
    return await db.collection(name)
}

async function executeQuery(query:string){
    return await db.query(query)
}

export async function getDocument(collection:string,key?:string){
    const col=await getCollection(collection)
    if(key) return await col.get(key)
    else {
        const cursor:any = await executeQuery(`FOR d IN ${collection} RETURN d`)
        return await cursor.collect()
    }
}

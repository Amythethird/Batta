import {Arango} from '../deps.ts'
import {getEnv} from "./commonFunctions.ts";
const db=await connect()

async function connect(){
    return await Arango.basicAuth({
        uri: `http://arangodb:8529/_db/${getEnv('DB')}`,
        username: getEnv('DB_USER'),
        password: getEnv('DB_PASS'),
    });
}

async function executeQuery(query:string):Promise<any[]>{
    const result=await db.query(query)
    return await result.collect()
}

async function getCollection(name:string){
    return await db.collection(name)
}

export async function getDocument(collection:string,key?:string){
    const col=await getCollection(collection)
    if(key) return await col.get(key)
    else return await executeQuery(`FOR d IN ${collection} RETURN d`)
}

async function isValidDocument(col:string,doc:any):Promise<boolean>{
    const schema=await executeQuery(`RETURN SCHEMA_GET('${col}')`)
    return (await executeQuery(`RETURN SCHEMA_VALIDATE(${JSON.stringify(doc)},${JSON.stringify(schema[0])})`))[0].valid
}

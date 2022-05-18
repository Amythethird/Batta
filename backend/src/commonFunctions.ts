import {FetchConfig} from "./Interfaces.ts";

export function getEnv(name: string) {
    return Deno.env.get(name) ?? '';
}

export async function fetchData(method: string, url: string, body: object = null) {
    const config: FetchConfig = {method};
    if (body && method === 'post') config.body = body;
    const data = await fetch(`${getEnv('BASE_URL')}/${url}`, config);
    return await data.json();
}

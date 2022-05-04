export function getEnv(name: string) {
	return Deno.env.get(name) ?? '';
}

export async function fetchData(method: string, url: string, body = {}) {
	// deno-lint-ignore no-explicit-any
	const config: any = { method };
	if (body && method === 'post') config.body = body;
	const data = await fetch(`${getEnv('BASE_URL')}/${url}`, config);
	return await data.json();
}

export function getEnv(name: string) {
  return Deno.env.get(name) ?? "";
}

export async function fetchData(method: string, url: string, body?: BodyInit) {
  const config: RequestInit = { method };
  if (body && method === "post") config.body = body;
  const data = await fetch(`${getEnv("BASE_URL")}/${url}`, config);
  return await data.json();
}

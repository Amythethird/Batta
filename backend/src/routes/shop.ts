import { fetchData } from '../commonFunctions.ts';
const prefix = 'shop';

// deno-lint-ignore no-explicit-any
export default function register(router: any) {
	// deno-lint-ignore no-explicit-any
	router.get(`/${prefix}s`, async (ctx: any) => {
		ctx.response.body = await fetchData('get', 'shops');
	});

	// deno-lint-ignore no-explicit-any
	router.get(`/${prefix}/:id`, async (ctx: any) => {
		ctx.response.body = await fetchData('get', `shops/${ctx.params.id}`);
	});
}

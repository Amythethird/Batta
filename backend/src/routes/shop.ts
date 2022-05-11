import { fetchData } from '../commonFunctions.ts';
import {Router} from "https://deno.land/x/oak@v10.5.1/router.ts";
const prefix = 'shop';

export default function register(router: Router) {
	router.get(`/${prefix}s`, async (ctx) => {
		ctx.response.body = await fetchData('get', 'shops');
	});

	router.get(`/${prefix}/:id`, async (ctx) => {
		ctx.response.status = 200
		ctx.response.body = await fetchData('get', `shops/${ctx.params.id}`);
	});
}

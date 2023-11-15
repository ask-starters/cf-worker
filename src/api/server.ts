export interface Env {}

interface OBJECT_TYPE {
    [key: string]: any
}

export type DEFAULT_RES_SINGLE<T> =
    { success: false, errors: string[], data?: T, warnings?: string[], code: number }
    | { success: true, data: T, warnings?: string[] };
export type DEFAULT_RES_SINGLE_P<T> = Promise<DEFAULT_RES_SINGLE<T>>;

export type DEFAULT_RES_ARR<T> =
    { success: false, errors: string[], data?: T[], warnings?: string[], code: number }
    | { success: true, data: T[], warnings?: string[] };
export type DEFAULT_RES_ARR_P<T> = Promise<DEFAULT_RES_ARR<T>>

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext) {

        const url = new URL(request.url);
		const search = url.searchParams;
		const pathname = url.pathname;

        if (request.method === "GET") {
			if (pathname === "/") {
				return new Response("This is the root of the payments worker");
			}
		}
    }
}
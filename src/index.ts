import { Env } from "./types/cloudflare";
import { OBJECT_TYPE } from "./types/general";
import { parse_request_body } from "./utils/cloudflare";
import { generate_response } from "./utils/response";


const server = {
    async fetch(request: Request, env: Env, ctx: ExecutionContext) {

        const url = new URL(request.url);
        const headers = request.headers;
        const method = request.method;
        const search = url.searchParams;
        const pathname = url.pathname;
        const pathname_parts = pathname.split("/");
        const ip = headers.get("cf-connecting-ip") ?? "N/A";
        let req_body: string | OBJECT_TYPE | null = null;
        const errors: string[] = [];

        if (method === "POST") {
            // Get body
            const post_body = await parse_request_body(request);
            if (!post_body.success) {
                return generate_response({
                    code: 400,
                    success: false,
                    errors: post_body.errors,
                })
            }

            req_body = post_body.body;
        }

        if (method === "GET") {
            if (pathname === "/") {
                return generate_response({
                    code: 200,
                    success: true,
                    data: {
                        message: "This is the root of the cf-worker",
                    },
                });
            }
        }

        return generate_response({
            code: 404,
            success: false,
            errors: [`API for ${method} ${pathname} not defined`],
        });
    }
}

export default server;
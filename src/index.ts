import { Env } from "./types/common";
import { send_json_res } from "./utils/response";


const server = {
    async fetch(request: Request, env: Env, ctx: ExecutionContext) {

        const url = new URL(request.url);
        const search = url.searchParams;
        const pathname = url.pathname;
        const req_headers = request.headers;
        let req_body: any = null;
        const errors: string[] = [];

        if (request.method === "POST") {
            // Get body
            req_body = await request.json().catch((e) => {
                console.warn("error at path " + pathname + " while parsing req body to json : ", String(e));
                errors.push("error at path " + pathname + " while parsing req body to json : " + String(e));
                return null;
            });
            if (!req_body) {
                return send_json_res({
                    code: 400,
                    success: false,
                    errors,
                })
            }
        }

        if (request.method === "GET") {
            if (pathname === "/") {
                return send_json_res({
                    code: 200,
                    success: true,
                    data: {
                        message: "This is the root of the cf-worker",
                    },
                });
            }
        }

        return send_json_res({
            code: 404,
            success: false,
            errors: ["Path or method not defined"],
        });
    }
}

export default server;
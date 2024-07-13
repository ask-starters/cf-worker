import { Env } from "../types/common";
import { send_json_res } from "../utils/response";


const server = {
    async fetch(request: Request, env: Env, ctx: ExecutionContext) {

        const url = new URL(request.url);
        const search = url.searchParams;
        const pathname = url.pathname;

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
    }
}

export default server;
import { OBJECT_TYPE } from "../types/general"
import { DEFAULT_RES_GENERAL } from "../types/response"

export const generate_response = (res: DEFAULT_RES_GENERAL<OBJECT_TYPE<any>>) => {
    return new Response(JSON.stringify(res), {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        },
    })
}
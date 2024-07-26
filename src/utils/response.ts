import { OBJECT_TYPE } from "../types/common"
import { DEFAULT_RES_ARR, DEFAULT_RES_SINGLE } from "../types/response"

export const send_json_res = (res: DEFAULT_RES_ARR<OBJECT_TYPE> | DEFAULT_RES_SINGLE<OBJECT_TYPE>) => {
    return new Response(JSON.stringify(res), {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        },
    })
}
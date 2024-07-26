import { OBJECT_TYPE } from "../types/common";

// REF: https://developers.cloudflare.com/workers/examples/read-post/
export const read_req_body = async (request: Request): Promise<{ success: true, type: "json", body: OBJECT_TYPE<any> } | { success: true, type: "text", body: string } | { success: false, errors: string[] }> => {
    const contentType = request.headers.get("content-type");
    if (contentType?.includes("application/json")) {
        return {
            success: true,
            type: "json",
            body: await request.json(),
        };
    }
    else if (contentType?.includes("application/text")) {
        return {
            success: true,
            type: "text",
            body: await request.text(),
        };
    }
    else if (contentType?.includes("text/html")) {
        return {
            success: true,
            type: "text",
            body: await request.text(),
        };
    }
    else if (contentType?.includes("form")) {
        const formData = await request.formData();
        const body: OBJECT_TYPE<any> = {};
        for (const entry of formData.entries()) {
            body[entry[0]] = entry[1];
        }
        return {
            success: true,
            type: "json",
            body,
        };
    }
    else {
        // Perhaps some other type of data was submitted in the form
        // like an image, or some other binary data.
        return {
            success: false,
            errors: ["no content type specified"]
        };
    }
}

export default {};
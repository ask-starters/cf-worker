import { HonoApp } from '../types/cloudflare';


export const setupNotFoundRoutes = (app: HonoApp) => {
    app.notFound((c) => {
        return c.json({
            code: 404,
            success: false,
            message: `API for ${c.req.method} ${c.req.path} not defined`
        });
    });
};
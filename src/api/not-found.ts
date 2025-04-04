import { HonoApp } from '../types/cloudflare';


export const setupNotFoundRoutes = (app: HonoApp) => {
    app.notFound((c) => {
        return c.json({
            code: 404,
            success: false,
            message: 'Not Found'
        });
    });
};
import { HonoApp } from '../types/cloudflare';


export const setupRootRoutes = (app: HonoApp) => {
    app.get('/', (c) => {
        return c.json({
            code: 200,
            success: true,
            data: {
                message: "Welcome to the CF Worker API"
            },
        });
    });

    app.post('/', async (c) => {
        const body = await c.req.json();
        return c.json({
            code: 200,
            success: true,
            data: body
        });
    });
};
import { Hono } from 'hono';

export const setupNotFoundRoutes = (app: Hono) => {
    app.notFound((c) => {
        return c.json({
            code: 404,
            success: false,
            message: 'Not Found'
        });
    });
};
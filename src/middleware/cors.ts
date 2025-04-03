import { Hono } from 'hono';
import { cors } from 'hono/cors';

export const setupCors = (app: Hono) => {
    app.use('*', cors({
        origin: '*',
        credentials: true,
        allowMethods: ['GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
        allowHeaders: ['Access-Control-Allow-Headers', 'Origin', 'Accept', 'X-Requested-With', 'Content-Type', 'Access-Control-Request-Method', 'Access-Control-Request-Headers'],
    }));
};

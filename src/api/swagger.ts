import { swaggerUI } from '@hono/swagger-ui';

import swaggerJson from '../../swagger.json';

import { HonoApp } from '../types/cloudflare';


export const setupSwaggerRoutes = (app: HonoApp) => {
    app.get('/swagger.json', (c) => {
        return c.json(swaggerJson);
    });

    // Swagger Documentation
    app.get('/api-playground', swaggerUI({ url: '/swagger.json' }));
};
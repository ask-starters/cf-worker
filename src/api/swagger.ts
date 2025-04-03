import { Hono } from 'hono';
import { swaggerUI } from '@hono/swagger-ui';
import swaggerJson from '../../swagger.json';

export const setupSwaggerRoutes = (app: Hono) => {
    app.get('/swagger.json', (c) => {
        return c.json(swaggerJson);
    });

    // Swagger Documentation
    app.get('/api-playground', swaggerUI({ url: '/swagger.json' }));
};
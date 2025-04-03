import { Hono } from 'hono';
import { logger } from 'hono/logger';

export const setupLogger = (app: Hono) => {
    app.use('*', logger());
};
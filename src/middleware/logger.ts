import { logger } from 'hono/logger';

import { HonoApp } from '../types/cloudflare';


export const setupLogger = (app: HonoApp) => {
    app.use('*', logger());
};
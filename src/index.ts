import { Hono } from 'hono';

import { setupRootRoutes } from './api/root';
import { setupSwaggerRoutes } from './api/swagger';
import { setupNotFoundRoutes } from './api/not-found';

import { setupLogger } from './middleware/logger';
import { setupCors } from './middleware/cors';


const app = new Hono();

setupLogger(app);
setupCors(app);

setupRootRoutes(app);
setupSwaggerRoutes(app);
setupNotFoundRoutes(app);

export default app;
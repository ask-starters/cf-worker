import { Hono } from 'hono';


export type EnvVars = {
    TEST_SECRET: string;
};

export type HonoApp = Hono<{ Bindings: EnvVars }>;
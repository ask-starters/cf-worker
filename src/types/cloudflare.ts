import { Hono } from 'hono';


export type EnvVars = {};

export type HonoApp = Hono<{ Bindings: EnvVars }>;
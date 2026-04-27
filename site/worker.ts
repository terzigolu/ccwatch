/**
 * Minimal Worker entry — delegates every request to the static assets bundle.
 *
 * Without this file, Cloudflare Workers Builds auto-generates a "Hello world"
 * placeholder that intercepts all requests, bypassing the [assets] config.
 * This file forwards everything to env.ASSETS so the Vite build is served.
 */
export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
};

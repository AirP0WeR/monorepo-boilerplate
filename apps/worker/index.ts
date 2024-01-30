import { createBroscoLogger } from "@package/logger";

const loggerWorker = createBroscoLogger("bun worker");

Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      loggerWorker.info("Home page!");
      return new Response("Home page!");
    }
    if (url.pathname === "/blog") {
      loggerWorker.info("Blog!");
      return new Response("Blog!");
    }
    return new Response("404!");
  },

  // Optional port number - the default value is 3000
  port: process.env.WORKER_PORT || 3000,
});
loggerWorker.info(`Bun server starts at ${process.env.WORKER_PORT}`);
